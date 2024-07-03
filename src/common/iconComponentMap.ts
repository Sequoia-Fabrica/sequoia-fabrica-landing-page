import calendar from '@/public/icon/calendar.svg';
import present from '@/public/icon/present.svg';
import defaultIcon from '@/public/icon/default.svg';
import at_symbol from '@/public/icon/at_symbol.svg';
import user_group from '@/public/icon/user_group.svg';
import instagram from '@/public/icon/instagram.svg';
import question from '@/public/icon/question.svg';
import globe from '@/public/icon/globe.svg';

import { StaticImport } from 'next/dist/shared/lib/get-img-props';

const iconComponentMap: Map<string, JSX.Element> = new Map([
   ['calendar', calendar], 
   ['present', present],
   ['at_symbol', at_symbol],
   ['user_group', user_group],
   ['instagram', instagram],
   ['question', question],
   ['globe', globe],
]);

export function getIconComponent(iconName: string): StaticImport {
   return iconComponentMap.get(iconName) ?? defaultIcon;
}
