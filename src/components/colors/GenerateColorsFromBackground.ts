import chroma from 'chroma-js';
import { AppColors, lightColors, darkColors } from './Colors';

export function generateColorsFromBackground(bg: string): AppColors {
  const base = chroma(bg);
  const isDark = base.luminance() < 0.35;

  const baseColors = isDark ? darkColors : lightColors;

  const mixWithBg = (colorHex: string, amount = 0.3) =>
    chroma.mix(colorHex, bg, amount, 'lab').hex();

  return {
    name: 'custom',
    background: base.hex(),
    whiteBackground: baseColors.whiteBackground,
    text: mixWithBg(baseColors.text, 0.25),
    whiteText: baseColors.whiteText,

    ccc: mixWithBg(baseColors.ccc, 0.3),
    midgrey: mixWithBg(baseColors.midgrey, 0.3),
    eee: mixWithBg(baseColors.eee, 0.3),

    evenRow: mixWithBg(baseColors.evenRow, 0.25),
    oddRow: mixWithBg(baseColors.oddRow, 0.25),

    black: isDark ? 'white' : 'black',

    link: mixWithBg(baseColors.link, 0.4),

    red: mixWithBg(baseColors.red, 0.3),
    midRed: mixWithBg(baseColors.midRed, 0.3),
    lightRed: mixWithBg(baseColors.lightRed, 0.3),

    green: mixWithBg(baseColors.green, 0.3),
    lightGreen: mixWithBg(baseColors.lightGreen, 0.3),

    blue: mixWithBg(baseColors.blue, 0.3),
    lightBlue: mixWithBg(baseColors.lightBlue, 0.3),

    yellow: mixWithBg(baseColors.yellow, 0.3),
    lightYellow: mixWithBg(baseColors.lightYellow, 0.3),

    darksteel: mixWithBg(baseColors.darksteel, 0.25),
    lightsteel: mixWithBg(baseColors.lightsteel, 0.25),
    midsteel: mixWithBg(baseColors.midsteel, 0.25),

    highlight: baseColors.highlight,
  };
}
