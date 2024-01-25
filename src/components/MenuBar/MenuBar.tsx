import { useEffect, useRef } from 'react';
import MenuBarItem from './MenuBarItem';
import { urlConstants } from '@/src/text/urlConstants';
import { handleClientScriptLoad } from 'next/script';

export interface MenuBarProps {
    isMenuOpen: boolean,
    selectHandler: () => void
}

const MenuBar: React.FC<MenuBarProps> = ({ isMenuOpen = false, selectHandler}) => {
    if (!isMenuOpen) {
        return null;
    }
    

    return (
      <ul className="p-4 bg-emerald-800 bg-pigment_green-200 absolute list-none w-full rounded-b-lg text-2xl">
          <MenuBarItem name='Events' url={urlConstants.meetup} handler={selectHandler}/>
          <MenuBarItem name='Donate' url={urlConstants.openCollective} handler={selectHandler}/>
          <MenuBarItem name='Membership' url='/docs/membership' handler={selectHandler}/>
          <MenuBarItem name='About' url='/docs/about' handler={selectHandler}/>
          <MenuBarItem name='Contact' url='/docs/contact' handler={selectHandler}/>
      </ul>
    );
};

export default MenuBar;
