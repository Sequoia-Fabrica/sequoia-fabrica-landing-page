
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config'; // Fix the path
const fullConfig = resolveConfig(tailwindConfig);

type ScreensConfig = typeof fullConfig.theme.screens;

export enum Breakpoints {
    XL = fullConfig.theme.screens['xl'],
    LG = fullConfig.theme.screens['lg'],
    MD = fullConfig.theme.screens['md'],
    SM = fullConfig.theme.screens['sm'],
}

export function isBreakpoint(breakpoint: Breakpoints, width: number): boolean {
    switch (breakpoint) {
        case Breakpoints.XL:
            return width >= Breakpoints.XL;
        case Breakpoints.LG:
            return width >= Breakpoints.LG;
        case Breakpoints.MD:
            return width >= Breakpoints.MD;
        case Breakpoints.SM:
            return width >= Breakpoints.SM;
        default:
            return false;
    }
}
