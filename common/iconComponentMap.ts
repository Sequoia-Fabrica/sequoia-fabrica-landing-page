import meetup from '@/public/icon/meetup.svg';
import present from '@/public/icon/present.svg';
import defaultIcon from '@/public/icon/default.svg';
import at_symbol from '@/public/icon/at_symbol.svg';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

const iconComponentMap: Map<string, JSX.Element> = new Map([
   ['meetup', meetup], 
   ['present', present],
   ['at_symbol', at_symbol],
]);

export function getIconComponent(iconName: string): StaticImport {
   return iconComponentMap.get(iconName) ?? defaultIcon;
}