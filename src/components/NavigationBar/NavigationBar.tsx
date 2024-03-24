
import { useState, useEffect, useRef } from "react";
import MenuBar from "../MenuBar/MenuBar";
import Logo from "../Logo/Logo";
import NavigationBarItem from "./NavigationBarItem";
import { urlConstants } from "@/src/text/urlConstants";

export default function NavigationBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const wrapperRef = useRef(null);
    const hamburgerMenuRef = useRef(null);
    useOutsideClick(wrapperRef, hamburgerMenuRef, () => setIsMenuOpen(false));

    return (
        <>
            <nav className="relative px-4 h-20 flex items-center bg-emerald-800 justify-between lg:justify-normal">
                <div className="text-3xl font-bold lg:float-left lg:absolute">
                    <Logo type="stacked"/>
                </div>
                
                <div className="hidden lg:block m-auto" >
                    <NavigationBarItem name='Events' url={urlConstants.bookWhen} />
                    <NavigationBarItem name='Donate' url={urlConstants.openCollective} />
                    <NavigationBarItem name='Membership' url='/docs/membership' />
                    <NavigationBarItem name='About' url='/docs/about' />
                    <NavigationBarItem name='Partner' url='/docs/partner' />
                    <NavigationBarItem name='Contact' url='/docs/contact' />
                </div>

                <div className="lg:hidden">
                    <button className="navbar-burger items-center text-tea_green hover:decoration-solid p-3" ref={hamburgerMenuRef} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Mobile menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                        </svg>
                    </button>
                </div>
            </nav>
            <div ref={wrapperRef}>
                <MenuBar isMenuOpen={isMenuOpen} selectHandler={() => setIsMenuOpen(false)}/>
            </div>
        </>
    );
};

function useOutsideClick<T extends HTMLElement>(ref: React.RefObject<T>, hamburgerMenuRef: React.RefObject<T>, callback: () => void) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node) && hamburgerMenuRef.current && !hamburgerMenuRef.current.contains(event.target as Node)) {
        callback();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback, hamburgerMenuRef]);
};