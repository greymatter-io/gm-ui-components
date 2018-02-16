/*/ Colors /*/
export const COLOR_BRAND_PRIMARY = "#0aab2a";
export const COLOR_BRAND_SECONDARY = "#002e6e";

export const COLOR_RED = "#E4251A";
export const COLOR_BLACK = "#000";
export const COLOR_GREEN = "#0aab2a";
export const COLOR_WHITE = "#fff";
export const COLOR_GREY = "#444";

export const COLOR_HIGHLIGHT = COLOR_BRAND_PRIMARY;
export const COLOR_SUCCESS = "#0aab2a";
export const COLOR_PRIMARY = "#fff";
export const COLOR_DANGER = COLOR_RED;
export const COLOR_WARNING = "#FAC60F";
export const COLOR_INFO = "blue";

export const DARK_ON_LIGHT_CONTRAST_ENHANCEMENT_RATIO = 2;

/*/ Theme Configuration /*/
export const COLOR_SIDEBAR_BACKGROUND = COLOR_BLACK;
export const COLOR_CONTENT_BACKGROUND = COLOR_WHITE;

export const BORDER_RADIUS_BASE = "3px";

export const ICON_VIEWBOX_SIZE = 24;

export const PADDING_BASE = 8;

// z-index mappings
export const ZINDEX_TOOLTIP = "1070";

/*/ Fonts /*/

// Backup font list
export const FONT_GROUP_SYSTEM = `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`;

export const FONT_GROUP_MAIN_TEXT = "GMMetropolis";
export const FONT_GROUP_DATA = "Rubik";
export const FONT_GROUP_CODE = `"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace`;
export const FONT_GROUP_DATA_MONO = "Source Code Pro";

export const FONT_STACK_BASE = `${FONT_GROUP_MAIN_TEXT}, ${FONT_GROUP_SYSTEM}`;
export const FONT_STACK_DATA = `${FONT_GROUP_DATA}, ${FONT_GROUP_SYSTEM}`;
export const FONT_STACK_DATA_MONO = `${FONT_GROUP_DATA_MONO}, ${FONT_GROUP_DATA}, ${FONT_GROUP_SYSTEM}`;
export const FONT_STACK_CODE = FONT_GROUP_CODE;

export const LINE_HEIGHT_BASE = 1.4;
export const FONT_WEIGHT_BASE = 400;
export const FONT_SIZE_HERO = "32px";
export const FONT_SIZE_LG = "18px";
export const FONT_SIZE_BASE = "14px";
export const FONT_SIZE_SM = "11px";
export const FONT_SIZE_XS = "9px";


// The default theme
export const decipher = {
  colorBrandPrimary: '#00ab2a',
  colorBrandSecondary: '#00ab2a',

  colorIntentHighlight: '#00ab2a',
  colorIntentDanger: 'red',
  colorIntentWarning: 'orange',
  colorIntentInfo: 'blue',
  colorIntentSuccess: 'green',

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

  fontStackNormal: `GMMetropolis, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`,
  fontStackCode: '',
  fontStackData: '',
  fontStackDataMono: '',

  transitionDurationNormal: '.15s',
  transitionTimingFunction: 'ease',
  transitionDelay: '0',
  transitionNormal: 'all .15s ease'
}

// The 'decipher' theme, but with colorBackground and colorContent swapped.
export const decipherDark = ({ colorBackground, colorContent }) => ({
  colorContent: colorBackground,
  colorBackground: colorContent
})