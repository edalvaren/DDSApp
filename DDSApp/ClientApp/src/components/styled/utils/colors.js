import lighten from 'polished/lib/color/lighten';
import darken from 'polished/lib/color/darken';
import shade from 'polished/lib/color/shade';

export const paleGrey = '#efefef';
export const lightGrey = 'rgba(20, 20, 20, 0.1)';
export const darkGrey = darken(0.05, '#282a36');
export const grey = '#282a36';

export const red = '#ff5555';
export const violetRed = 'rgb(219, 112, 147)';
export const lightVioletRed = lighten(0.31, 'rgb(219, 112, 147)');


export const themeDark = '#094145';
export const themeMedium = '#05747c';
export const themeLight = '#C2E3D2';
export const themeBlue = '#021035';

export const gold = shade(0.9, 'rgb(243, 182, 97)');