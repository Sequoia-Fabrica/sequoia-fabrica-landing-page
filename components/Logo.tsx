import Image from 'next/image';
import Horizontal_Logo from "@/public/sf_logo_horizontal.svg";

export default function Logo() {
    return (
        <a href='/'>
            <Image className="m-auto scale-150 md:scale-[2] lg:scale-[3]" priority src={Horizontal_Logo} alt="Sequoia Fabrica" />
        </a>
    );
}