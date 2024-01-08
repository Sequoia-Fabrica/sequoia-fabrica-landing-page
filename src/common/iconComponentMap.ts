import meetup from '@/public/icon/meetup.svg';
import present from '@/public/icon/present.svg';
import defaultIcon from '@/public/icon/default.svg';
import at_symbol from '@/public/icon/at_symbol.svg';
import user_group from '@/public/icon/user_group.svg';
import instagram from '@/public/icon/instagram.svg';
import question from '@/public/icon/question.svg';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

const iconComponentMap: Map<string, JSX.Element> = new Map([
   ['meetup', meetup], 
   ['present', present],
   ['at_symbol', at_symbol],
   ['user_group', user_group],
   ['instagram', instagram],
   ['question', question],
]);

export function getIconComponent(iconName: string): StaticImport {
   return iconComponentMap.get(iconName) ?? defaultIcon;
}
