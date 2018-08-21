import { mix } from "polished";

/*/ Colors /*/
export const COLOR_BRAND_PRIMARY = "#0aab2a"; // COLOR_BRAND_A
export const COLOR_BRAND_SECONDARY = "#002e6e"; // COLOR_BRAND_C
export const COLOR_CONTENT = '#000';
export const COLOR_BACKGROUND_A = '#fff';
export const COLOR_BACKGROUND_B = '#F8F8F8';
export const COLOR_BACKGROUND_C = '#000';
export const COLOR_INTENT_DANGER = "#EB4F3D";
export const COLOR_INTENT_WARNING = "#F7CD45";
export const COLOR_INTENT_SUCCESS = "#0aab2a";
// export const COLOR_INTENT_HIGHLIGHT = '#327BF7';
export const COLOR_INTENT_HIGHLIGHT = COLOR_BRAND_PRIMARY;
export const COLOR_KEYLINE = 'rgba(0,0,0,0.08)';
export const COLOR_KEYLINE_SOLID = '#EBEBEB';


// DEPRECATE THESE
export const COLOR_RED = "#E4251A"; // COLOR_INTENT_DANGER
export const COLOR_BLACK = "#000"; // COLOR_CONTENT / COLOR_BACKGROUND_C
export const COLOR_GREEN = "#0aab2a"; // COLOR_INTENT_HIGHLIGHT / COLOR_BRAND_A
export const COLOR_WHITE = "#fff"; // COLOR_BACKGROUND_A / readableColor(COLOR_BACKGROUND_C)
export const COLOR_GREY = mix(0.2, COLOR_WHITE, COLOR_BLACK); // COLOR_BACKGROUND_B
export const COLOR_HIGHLIGHT = COLOR_BRAND_PRIMARY; // COLOR_INTENT_HIGHLIGHT
export const COLOR_SUCCESS = COLOR_BRAND_PRIMARY; // COLOR_INTENT_SUCCESS
export const COLOR_DANGER = COLOR_RED; // COLOR_INTENT_DANGER
export const COLOR_WARNING = "#f8b400"; // COLOR_INTENT_WARNING
export const COLOR_INFO = "#094dff"; // COLOR_INTENT_HIGHLIGHT

export const OPACITY_100 = '1';
export const OPACITY_70 = '0.7';
export const OPACITY_50 = '0.5';
export const OPACITY_15 = '0.15';


// DEPRECATE
export const DARK_ON_LIGHT_CONTRAST_ENHANCEMENT_RATIO = 2;
export const COLOR_SIDEBAR_BACKGROUND = COLOR_BLACK; // COLOR_BACKGROUND_C
export const COLOR_CONTENT_BACKGROUND = COLOR_WHITE; // COLOR_BACKGROUND_A
export const COLOR_SIDEBAR_CONTENT = COLOR_WHITE; // readableColor(COLOR_BACKGROUND_C)


export const BORDER_RADIUS_BASE = "3px"; // 4px
export const PADDING_BASE = 8; 
export const ICON_VIEWBOX_SIZE = 24; // Move to Icons component? spacingScale(3)?

// z-index mappings
export const ZINDEX_TOOLTIP = "1070";
export const ZINDEX_STICKY = "1010";



/*/ Fonts /*/

// Backup font list
export const FONT_GROUP_SYSTEM = `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`;

// Fonts for specific use
// NEW
export const FONT_GROUP_BRAND = `"Avenir Next", "Metropolis", "Helvetica Neue", Arial, sans-serif`;
export const FONT_GROUP_MAIN_TEXT = `"Avenir Next", "Metropolis", "Helvetica Neue", Arial, sans-serif`; // FONT_STACK_BRAND

export const FONT_GROUP_CODE = `"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace`;

// DEPRECATE
export const FONT_GROUP_DATA = "Rubik";
export const FONT_GROUP_DATA_MONO = "Source Code Pro";
export const FONT_STACK_DATA = `${FONT_GROUP_DATA}, ${FONT_GROUP_SYSTEM}`;
export const FONT_STACK_DATA_MONO = `${FONT_GROUP_DATA_MONO}, ${FONT_GROUP_DATA}, ${FONT_GROUP_SYSTEM}`;
export const FONT_STACK_CODE = FONT_GROUP_CODE;

// NEW
export const FONT_STACK_BRAND = `${FONT_GROUP_DATA}, ${FONT_GROUP_SYSTEM}`;
export const FONT_STACK_BASE = `${FONT_GROUP_SYSTEM}`;


export const LINE_HEIGHT_BASE = 1.4;
export const FONT_WEIGHT_BASE = 400;
export const FONT_WEIGHT_SEMIBOLD = FONT_WEIGHT_BASE * 1.25;
export const FONT_WEIGHT_BOLD = 600; // 700? 800?
export const FONT_WEIGHT_CONTROLS = 600; // FONT_WEIGHT_BASE


export const FONT_SIZE_HERO = "40px"; // GOOD
export const FONT_SIZE_TITLE = "36px"; // 32px
export const FONT_SIZE_LG = "18px"; // 24px
export const FONT_SIZE_MD = "16px"; // 18px
export const FONT_SIZE_BASE = "14px"; // GOOD
export const FONT_SIZE_SM = "11px"; // 12px
export const FONT_SIZE_XS = "9px"; // 10px
