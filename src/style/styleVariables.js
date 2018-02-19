// Configuration
export const DARK_ON_LIGHT_CONTRAST_ENHANCEMENT_RATIO = 2;
export const ICON_VIEWBOX_SIZE = 24;

// z-index mappings
export const ZINDEX_TOOLTIP = "1070";

// Fonts
export const FONT_GROUP_SYSTEM = `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`;
export const FONT_GROUP_MAIN_TEXT = "GMMetropolis";
export const FONT_GROUP_DATA = "Rubik";
export const FONT_GROUP_CODE = `"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace`;
export const FONT_GROUP_DATA_MONO = "Source Code Pro";

export const FONT_STACK_BASE = `${FONT_GROUP_MAIN_TEXT}, ${FONT_GROUP_SYSTEM}`;
export const FONT_STACK_DATA = `${FONT_GROUP_DATA}, ${FONT_GROUP_SYSTEM}`;
export const FONT_STACK_DATA_MONO = `${FONT_GROUP_DATA_MONO}, ${FONT_GROUP_DATA}, ${FONT_GROUP_SYSTEM}`;
export const FONT_STACK_CODE = FONT_GROUP_CODE;

// Decipher Core Tokens
export const DECIPHER_GREEN = '#00ab2a';
export const DECIPHER_TYPEFACE_PRIMARY = "GMMetropolis";


// The default theme and base settings for all variables
export const defaultTheme = {
  colorBrandPrimary: '#094dff', // Apple blue
  colorBrandSecondary: '#eb0035', // Apple pink

  colorIntentHighlight: '#094dff',
  colorIntentDanger: '#eb001a',
  colorIntentWarning: '#eb001a',
  colorIntentInfo: '#4ab0fc',
  colorIntentSuccess: '#4fce31',

  colorBackground: '#fff',
  colorContent: '#000',

  spacing: '8px',
  borderRadiusNormal: '6px',

  fontSizeNormal: '14px',
  fontSizeXs: '9px',
  fontSizeSm: '11px',
  fontSizeLg: '24px',
  fontSizeXl: '32px',
  fontSizeHero: '40px',

  lineHeightNormal: '1.6',
  lineHeightHeading: '1.1',
  lineHeightControls: '1.2',

  fontWeightNormal: '400',
  fontWeightHeadings: '600',
  fontWeightControls: '500',

  fontStackNormal: FONT_GROUP_SYSTEM,
  fontStackCode: FONT_STACK_CODE,
  fontStackData: FONT_STACK_DATA_MONO,
  fontStackDataMono: FONT_STACK_DATA,

  transitionDurationNormal: '.15s',
  transitionTimingFunction: 'ease',
  transitionDelay: '0',
  transitionNormal: 'all .15s ease'
}

// Modify the default theme to add unique Decipher branding aspects
export const decipher = (defaultTheme) => ({
  defaultTheme,
  colorBrandPrimary: '#00ab2a',
  fontStackNormal: FONT_STACK_BASE
})

// Invert the decipher theme, by swapping the foreground and background colors
export const decipherDark = (decipher) => ({
  decipher,
  colorBackground: '#000',
  colorContent: '#fff'
})
