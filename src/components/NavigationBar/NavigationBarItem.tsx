
export interface NavigationBarItemProps {
    name: string,
    url: string,
}

const NavigationBarItem: React.FC<NavigationBarItemProps> = ({ name, url }) => {
    return (
        <a className="mb-1 inline-block p-4 flex-auto text-tea_green hover:text-tea_green-200 text-xl"
            href={url} >
            {name}
        </a>
    )
};

export default NavigationBarItem;