import Icon from "../Icon/Icon";

export interface FooterItemProps {
    name: string,
    href: string,
    iconName?: string,
    goatCounter?: string
}

const FooterItem: React.FC<FooterItemProps> = ({ name, href, iconName, goatCounter }) => {
    return (
        <a className="text-md text-tea_green hover:text-tea_green-400" href={href} data-goatcounter-click={goatCounter}>
            {iconName && <Icon iconName={iconName} />}
            <span className="pl-1 align-middle">{name}</span>
        </a>
    )
}

export default FooterItem