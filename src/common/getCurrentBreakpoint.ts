import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config'; // Fix the path

const fullConfig = resolveConfig(tailwindConfig);

type ScreensConfig = typeof fullConfig.theme.screens;

export function getBreakpointValue<K extends keyof ScreensConfig>(value: K): number {
  return +fullConfig.theme.screens[value].slice(0, fullConfig.theme.screens[value].indexOf('px')) ?? 0;
}

export function getCurrentBreakpoint(): string {
  let currentBreakpoint: string = "sm";
  let biggestBreakpointValue = 0;
  if (typeof window !== 'undefined') {
    for (const breakpoint of Object.keys(fullConfig.theme.screens!)) {
      const breakpointValue = getBreakpointValue(breakpoint);
      if (
        breakpointValue > biggestBreakpointValue &&
        window.innerWidth >= breakpointValue
      ) {
        biggestBreakpointValue = breakpointValue;
        currentBreakpoint = breakpoint;
      }
    }
  }
  console.log(currentBreakpoint);
  return currentBreakpoint;
};