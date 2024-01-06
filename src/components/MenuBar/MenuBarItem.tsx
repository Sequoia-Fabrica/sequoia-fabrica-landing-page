
export interface MenuBarItemProps {
    name: string,
    url: string,
}

const MenuBarItem: React.FC<MenuBarItemProps> = ({ name, url }) => {
    return (
        <li className="mb-1">
            <a className="block p-4 text-mda font-semibold text-pigment_green hover:bg-tea_green hover:text-pigment_green-300 rounded-lg"
               href={url} >
                {name}
            </a>
        </li>
    )
};

export default MenuBarItem;