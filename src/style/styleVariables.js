import { mix } from "polished";

/*/ Colors /*/
export const COLOR_BRAND_PRIMARY = "#0aab2a";
export const COLOR_BRAND_SECONDARY = "#002e6e";
export const COLOR_CONTENT = '#000';
export const COLOR_BACKGROUND_A = '#fff';
export const COLOR_BACKGROUND_B = '#F8F8F8';
export const COLOR_BACKGROUND_C = '#000';
export const COLOR_INTENT_DANGER = "#EB4F3D";
export const COLOR_INTENT_WARNING = "#F7CD45";
export const COLOR_INTENT_SUCCESS = "#0aab2a";
export const COLOR_INTENT_HIGHLIGHT = '#327BF7';
export const COLOR_KEYLINE = 'rgba(0,0,0,0.08)';
export const COLOR_KEYLINE_SOLID = '#EBEBEB';


// DEPRECATE
export const COLOR_RED = "#E4251A";
export const COLOR_BLACK = "#000";
export const COLOR_GREEN = "#0aab2a";
export const COLOR_WHITE = "#fff";
export const COLOR_GREY = mix(0.2, COLOR_WHITE, COLOR_BLACK);
export const COLOR_HIGHLIGHT = COLOR_BRAND_PRIMARY;
export const COLOR_SUCCESS = COLOR_BRAND_PRIMARY;
export const COLOR_DANGER = COLOR_RED;
export const COLOR_WARNING = "#f8b400";
export const COLOR_INFO = "#094dff";

export const OPACITY_100 = '1';
export const OPACITY_70 = '0.7';
export const OPACITY_50 = '0.5';
export const OPACITY_15 = '0.15';

export const DARK_ON_LIGHT_CONTRAST_ENHANCEMENT_RATIO = 2;

// DEPRECATE
export const COLOR_SIDEBAR_BACKGROUND = COLOR_BLACK;
export const COLOR_CONTENT_BACKGROUND = COLOR_WHITE;
export const COLOR_SIDEBAR_CONTENT = COLOR_WHITE;


export const BORDER_RADIUS_BASE = "3px";
export const PADDING_BASE = 8;
export const ICON_VIEWBOX_SIZE = 24;

// z-index mappings
export const ZINDEX_TOOLTIP = "1070";
export const ZINDEX_STICKY = "1010";
/*/ Fonts /*/

// Backup font list
export const FONT_GROUP_SYSTEM = `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`;

// Fonts for specific use
export const FONT_GROUP_MAIN_TEXT = `"Avenir Next", "Metropolis", "Helvetica Neue", Arial, sans-serif`;
export const FONT_GROUP_DATA = "Rubik";
export const FONT_GROUP_CODE = `"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace`;
export const FONT_GROUP_DATA_MONO = "Source Code Pro";

export const FONT_STACK_BASE = `${FONT_GROUP_SYSTEM}`;
export const FONT_STACK_DATA = `${FONT_GROUP_DATA}, ${FONT_GROUP_SYSTEM}`;
export const FONT_STACK_DATA_MONO = `${FONT_GROUP_DATA_MONO}, ${FONT_GROUP_DATA}, ${FONT_GROUP_SYSTEM}`;
export const FONT_STACK_CODE = FONT_GROUP_CODE;

export const LINE_HEIGHT_BASE = 1.4;
export const FONT_WEIGHT_BASE = 400;
export const FONT_WEIGHT_SEMIBOLD = FONT_WEIGHT_BASE * 1.25;
export const FONT_WEIGHT_BOLD = 600;
export const FONT_WEIGHT_CONTROLS = 600;

export const FONT_SIZE_HERO = "40px";
export const FONT_SIZE_LG = "18px";
export const FONT_SIZE_BASE = "14px";
export const FONT_SIZE_MD = "16px";
export const FONT_SIZE_SM = "11px";
export const FONT_SIZE_XS = "9px";
export const FONT_SIZE_TITLE = "36px";
