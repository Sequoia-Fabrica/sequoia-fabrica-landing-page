import React from 'react';
import Image from 'next/image';
import { getIconComponent } from '@/common/iconComponentMap';

interface IconProps {
    iconName: string;
}

const Icon: React.FC<IconProps> = ({ iconName }) => {

    return (
        <Image className='inline' src={getIconComponent(iconName)} alt={iconName} />
    );
};

export default Icon;
