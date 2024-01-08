import React from 'react';
import Image from 'next/image';
import { getIconComponent } from '@/src/common/iconComponentMap';

export interface IconProps {
    iconName: string;
}

const Icon: React.FC<IconProps> = ({ iconName }) => {

    return (
        <Image className='inline' src={getIconComponent(iconName)} alt={iconName} />
    );
};

export default Icon;
