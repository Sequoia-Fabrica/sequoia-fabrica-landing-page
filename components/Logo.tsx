import Image from 'next/image';
import Horizontal_Logo from "@/public/sf_logo_horizontal.svg";
import Stacked_Logo from "@/public/sf_logo_stacked.svg";

interface LogoProps {
    type: 'stacked' | 'horizontal'
}

const Logo: React.FC<LogoProps> = ({ type = 'horizontal' }) => {
    if (type == 'horizontal') {
    return (
        <a href='/'>
            <Image className="m-auto scale-150 md:scale-[2] lg:scale-[3]" priority src={Horizontal_Logo} alt="Sequoia Fabrica" />
        </a>
    );
    } else if (type == 'stacked') {
    return (
        <a href='/'>
            <Image className="m-auto" priority src={Stacked_Logo} alt="Sequoia Fabrica" />
        </a>
    );
    }
}

export default Logo;