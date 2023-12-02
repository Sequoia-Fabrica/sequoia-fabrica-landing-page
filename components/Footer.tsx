const copyright="©2023 Sequoia Fabrica. All rights reserved."

export default function Footer() {

    // const getContactItem = () => {

    // }

    // const getLocationItem = () => {

    // }

    // const getDonationItem = () => {

    // }

    const footerItems = []
    return (
        <footer className='footer bg-neutral-200 text-center dark:bg-neutral-700 lg:text-left'>
        <ul>
        {footerItems.map((item, index) => (
            <li key={index}>{item}</li>
        ))}
        </ul>
        <div>
        <p className="p-4 text-center text-neutral-700 dark:text-neutral-200">
        {copyright}
        </p>
        </div>
        </footer>
    );
};
