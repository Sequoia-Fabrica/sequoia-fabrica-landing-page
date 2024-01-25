import Link from "next/link";
import { ReactNode } from "react";

export interface MenuBarItemProps {
    name: string,
    url: string,
    handler: () => void
}

const MenuBarItem: React.FC<MenuBarItemProps> = ({ name, url, handler}) => {
    const handleClick = () => {
        handler();
    }
    return (
        <li className="mb-1">
            <Link className="block p-4 font-semibold text-tea_green hover:bg-tea_green hover:text-pigment_green-300 rounded-lg no-underline"
               href={url}
               onClick={handleClick} >
                {name}
            </Link>
        </li>
    )
};

export default MenuBarItem;