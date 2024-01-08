import Image from 'next/image';
import Horizontal_Logo from "@/public/sf_logo_horizontal.svg";
import Stacked_Logo from "@/public/sf_logo_stacked.svg";
import Vertical_Logo from "@/public/sf_logo_vertical.svg";
import Link from 'next/link';

export interface LogoProps {
    type?: 'stacked' | 'horizontal' | 'vertical'
}

const Logo: React.FC<LogoProps> = ({ type = 'horizontal' }) => {
    if (type == 'horizontal') {
        return (
            <Link href='/'>
                <Image className="m-auto scale-150 md:scale-[2] lg:scale-[3]" priority src={Horizontal_Logo} alt="Sequoia Fabrica" />
            </Link>
        );
    } else if (type == 'stacked') {
        return (
            <Link href='/'>
                <Image className="m-auto" priority src={Stacked_Logo} alt="Sequoia Fabrica" />
            </Link>
        );
    } else if (type == 'vertical') {
        return (
            <Link href='/'>
                <Image className="m-auto" priority src={Vertical_Logo} alt="Sequoia Fabrica" />
            </Link>
        );
    }
}

export default Logo;