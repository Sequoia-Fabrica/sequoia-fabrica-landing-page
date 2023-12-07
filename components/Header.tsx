import Logo from "@/components/Logo";

const copyright = "©2023 Sequoia Fabrica. All rights reserved."

export default function Footer() {
    return (
        <header className='header bg-pigment_green-300  dark:bg-neutral-700 text-center md:text-left'>
            <Logo type='stacked'/>
        </header>
    );
};
