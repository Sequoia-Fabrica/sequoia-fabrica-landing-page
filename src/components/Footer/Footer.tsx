import FooterItem, { FooterItemProps } from "./FooterItem";
import { urlConstants } from "@/src/text/urlConstants";

const copyright = "©2024 Sequoia Fabrica. All rights reserved."

export default function Footer() {
    const getContactItem = () => {
        return (
            { name: "Contact", href: "/docs/contact", iconName: "at_symbol" }
        );
    }

    const getInstagramItem = () => {
        return (
            { name: "Instagram", href: urlConstants.instagram, iconName: "instagram", goatCounter: urlConstants.instagram }
        );
    }

    const getEventsItem = () => {
        return (
            { name: "Events and Classes", href: urlConstants.bookWhen, iconName: "calendar", goatCounter: urlConstants.bookWhen }
        );
    };

    const getDonationItem = () => {
        return (
            { name: "Donate", href: urlConstants.donateStripe, iconName: "present", goatCounter: urlConstants.donateStripe }
        );
    };

    const getCodeOfConduct = () => {
        return (
            { name: "Code of Conduct", href: "/docs/code_of_conduct", iconName: "user_group" }
        );
    }
    
    const getAbout = () => {
        return (
            { name:"About", href: "/docs/about", iconName: 'question' }
        );
    }

    const getWiki = () => {
        return (
            { name:"Wiki", href: urlConstants.wiki, iconName:'globe', goatCounter:urlConstants.wiki }
        );
    }

    const footerItems: FooterItemProps[] = [
        getEventsItem(),
        getInstagramItem(),
        getDonationItem(),
        getContactItem(),
        getCodeOfConduct(),
        getAbout(),
        getWiki(),
    ];

    return (
        <footer className='footer bg-emerald-800  text-center lg:text-left'>
            <div className='p-10'>
                <div className='text-center flex flex-wrap'>
                    {footerItems.map((props, index) => (
                        <div className='flex-auto p-2' key={index}>
                            <FooterItem {...props} />
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <p className="p-4 text-center text-tea_green">
                    {copyright}
                    <br />1736 18th St San Francisco, CA 94107
                </p>
            </div>
        </footer>
    );
};
