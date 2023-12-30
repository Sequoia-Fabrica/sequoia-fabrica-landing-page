
export interface MenuBarItemProps {
    name: string,
    url: string,
}

const MenuBarItem: React.FC<MenuBarItemProps> = ({ name, url }) => {
    return (
        <li className="mb-1">
            <a className="block p-4 text-mda font-semibold text-gray-400 hover:bg-tea_green-800 hover:text-pigment_green-300 rounded"
               href={url} >
                {name}
            </a>
        </li>
    )
};

export default MenuBarItem;