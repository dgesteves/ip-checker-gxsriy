import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: IColors;
    sizes: ISizes;
    breakpoints: IBreakpoints;
  }
}

export interface IColors {
  white: "#FFFFFF";
  very_dark_gray: "hsl(0, 0%, 17%)";
  dark_gray: "hsl(0, 0%, 59%)";
  gray: "hsl(0, 0%, 80%)";
  light_gray: "hsl(0, 0%, 98%)";
  error: "hsl(0, 100%, 50%)";
}

export interface ISizes {
  s2: "0.125rem";
  s4: "0.25rem";
  s6: "0.375rem";
  s8: "0.5rem";
  s10: "0.625rem";
  s12: "0.75rem";
  s14: "0.875rem";
  s16: "1rem";
  s18: "1.125rem";
  s20: "1.25rem";
  s24: "1.5rem";
  s28: "1.75rem";
  s32: "2rem";
  s36: "2.25rem";
  s40: "2.5rem";
  s42: "2.625rem";
  s44: "2.75rem";
  s48: "3rem";
  s52: "3.25rem";
  s56: "3.5rem";
  s60: "3.75rem";
  s64: "4rem";
  s68: "4.25rem";
  s72: "4.5rem";
  s76: "4.75rem";
  s80: "5rem";
  s90: "5.5rem";
  s100: "6rem";
}

export interface IBreakpoints {
  mobile: "375px";
  desktop: "1440px";
}
