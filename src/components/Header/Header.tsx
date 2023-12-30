import Logo from "@/src/components/Logo/Logo";

export default function Header() {
    return (
        <header className='header bg-pigment_green-300 text-center md:text-left'>
            <Logo type='stacked'/>
        </header>
    );
};
