import { useEffect, useRef } from 'react';
import MenuBarItem from './MenuBarItem';
import { urlConstants } from '@/src/text/urlConstants';

export interface MenuBarProps {
    isMenuOpen: boolean,
}

const MenuBar: React.FC<MenuBarProps> = ({ isMenuOpen = false }) => {
    if (!isMenuOpen) {
        return null;
    }
    

    return (
      <ul className="list-none">
          <MenuBarItem name='Events' url={urlConstants.meetup} />
          <MenuBarItem name='Donate' url={urlConstants.openCollective} />
          <MenuBarItem name='Membership' url='/docs/membership' />
          <MenuBarItem name='About' url='/docs/about' />
          <MenuBarItem name='Contact' url='/docs/contact' />
      </ul>
    );
};

export default MenuBar;