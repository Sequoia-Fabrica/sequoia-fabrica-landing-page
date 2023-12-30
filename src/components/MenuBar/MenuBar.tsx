import { useEffect, useRef } from 'react';
import MenuBarItem from './MenuBarItem';

export interface MenuBarProps {
    isMenuOpen: boolean,
    toggleMenu: () => void,
}

const MenuBar: React.FC<MenuBarProps> = ({ isMenuOpen = false, toggleMenu }) => {
    if (!isMenuOpen) {
        return null;
    }
    
    const wrapperRef = useRef(null);
    useOutsideClick(wrapperRef, toggleMenu);

    return (
            <div ref={wrapperRef}>
                <ul className="list-none">
                    <MenuBarItem name='Events' url='/docs/events' />
                    <MenuBarItem name='Donate' url='/docs/donate' />
                    <MenuBarItem name='Membership' url='/docs/membership' />
                    <MenuBarItem name='About' url='/docs/about' />
                </ul>
            </div>
    );
};

function useOutsideClick<T extends HTMLElement>(ref: React.RefObject<T>, callback: () => void) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback]);
}

export default MenuBar;