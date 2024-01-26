import FooterItem, { FooterItemProps } from "./FooterItem";
import { urlConstants } from "@/src/text/urlConstants";

const copyright = "©2023 Sequoia Fabrica. All rights reserved."

export default function Footer() {
    const getContactItem = () => {
        return (
            { name: "Contact", href: "/docs/contact", iconName: "at_symbol" }
        );
    }

    const getInstagramItem = () => {
        return (
            { name: "Instagram", href: urlConstants.instagram, iconName: "instagram" }
        );
    }

    const getEventsItem = () => {
        return (
            { name: "Events and Classes", href: urlConstants.meetup, iconName: "meetup" }
        );
    };

    const getDonationItem = () => {
        return (
            { name: "Donate", href: urlConstants.openCollective, iconName: "present" }
        );
    };

    const getCodeOfConduct = () => {
        return (
            { name: "Code of Conduct", href: "/docs/code_of_conduct", iconName: "user_group" }
        );
    }
    
    const getFAQ = () => {
        return (
            { name:"FAQ", href: "/docs/faq", iconName: 'question' }
        );
    }

    const getWiki = () => {
        return (
            { name:"Wiki", href: "https://wiki.sequoiafabrica.org/wiki/Main_Page", }
        );
    }

    const footerItems: FooterItemProps[] = [
        getEventsItem(),
        getInstagramItem(),
        getDonationItem(),
        getContactItem(),
        getCodeOfConduct(),
        getFAQ(),
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
                </p>
            </div>
        </footer>
    );
};
