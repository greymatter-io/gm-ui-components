import { hsla, rgba } from "polished";

export const keenLegacy = {
  name: "Keen",

  COLOR_BRAND_PRIMARY: "#00b42b",
  COLOR_BRAND_SECONDARY: "#00b42b",

  COLOR_CONTENT_DEFAULT: "rgba(0,0,0,0.85)",
  COLOR_CONTENT_CONTRAST: "rgba(0,0,0,1)",
  COLOR_CONTENT_MUTED: "rgba(0,0,0,0.6)",
  COLOR_CONTENT_NONESSENTIAL: "rgba(0,0,0,0.3)",

  COLOR_BACKGROUND_DEFAULT: "#ffffff",
  COLOR_BACKGROUND_TWO: "#F8F8F8",
  COLOR_BACKGROUND_THREE: "#eee",

  COLOR_INTENT_HIGHLIGHT: "#0aab2a",
  COLOR_INTENT_SUCCESS: "#0aab2a",
  COLOR_INTENT_DANGER: "#D83D22", // WCAG AA+
  COLOR_INTENT_WARNING: "#F7CD45", // WCAG AA+
  COLOR_INTENT_INFO: "#1E6DF6", // WCAG AA+

  COLOR_KEYLINE_DEFAULT: "rgba(0,0,0,0.08)",
  COLOR_KEYLINE_DEFAULT_SOLID: "#EBEBEB",

  OPACITY_FULL: "1",
  OPACITY_LIGHT: "0.7",
  OPACITY_LIGHTER: "0.5",
  OPACITY_LIGHTEST: "0.15",

  // LAYOUT
  BORDER_RADIUS_BASE: "3px", // Will be changed to 4px
  SPACING_BASE: 8,
  ICON_VIEWBOX_SIZE: 24, // Move to Icons component?

  ZINDEX_TOOLTIP: "1070",
  ZINDEX_STICKY: "1010",

  CORNER_RADIUS_SHARP: "4px", // spacingScale(0.5)
  CORNER_RADIUS_INPUT: "8px", // spacingScale(1)
  RADIUS_2: "16px", // spacingScale(2)
  RADIUS_3: "24px", // spacingScale(3)
  RADIUS_4: "32px", // spacingScale(4)
  RADIUS_5: "40px", // spacingScale(5)
  RADIUS_6: "48px", // spacingScale(6)
  RADIUS_7: "56px", // spacingScale(7)
  RADIUS_8: "64px", // spacingScale(8)

  // TYPOGRAPHY
  FONT_STACK_DEFAULT: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`,
  FONT_STACK_BRAND: `"Avenir Next", "Metropolis", "Helvetica Neue", Arial, sans-serif`,
  FONT_STACK_CODE: `"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace`,

  FONT_SIZE_PAGE_TITLE: "40px",
  FONT_SIZE_HEADING_DEFAULT: "36px", // Will be changed to 32px
  FONT_SIZE_TEXT_XL: "18px", // Will be changed to 24px
  FONT_SIZE_TEXT_LG: "16px", // Will be changed to 18px
  FONT_SIZE_TEXT_DEFAULT: "14px",
  FONT_SIZE_TEXT_SM: "11px", // Will be changed to 12px
  FONT_SIZE_TEXT_XS: "9px", // Will be changed to 10px

  LINE_HEIGHT_DEFAULT: 1.4,
  FONT_WEIGHT_DEFAULT: 400,
  FONT_WEIGHT_SEMIBOLD: 600,
  FONT_WEIGHT_BOLD: 800
};

export const keen = {
  name: "Keen",

  COLOR_BRAND_PRIMARY: "#0aab2a",
  COLOR_BRAND_SECONDARY: "#0aab2a",
  COLOR_CONTENT_DEFAULT: "#000",

  COLOR_BACKGROUND_DEFAULT: "#ffffff",
  COLOR_BACKGROUND_TWO: "#F8F8F8",
  COLOR_BACKGROUND_THREE: "#000000",

  COLOR_INTENT_HIGHLIGHT: "#0aab2a",
  COLOR_INTENT_SUCCESS: "#0aab2a",
  COLOR_INTENT_DANGER: "#D83D22", // WCAG AA+
  COLOR_INTENT_WARNING: "#F7CD45", // WCAG AA+
  COLOR_INTENT_INFO: "#1E6DF6", // WCAG AA+

  COLOR_KEYLINE_DEFAULT: "rgba(0,0,0,0.08)",
  COLOR_KEYLINE_DEFAULT_SOLID: "#EBEBEB",

  OPACITY_FULL: "1",
  OPACITY_LIGHT: "0.7",
  OPACITY_LIGHTER: "0.5",
  OPACITY_LIGHTEST: "0.15",

  // LAYOUT
  BORDER_RADIUS_BASE: "3px", // Will be changed to 4px
  SPACING_BASE: 8,
  ICON_VIEWBOX_SIZE: 24, // Move to Icons component?

  ZINDEX_TOOLTIP: "1070",
  ZINDEX_STICKY: "1010",

  CORNER_RADIUS_SHARP: "4px", // spacingScale(0.5)
  CORNER_RADIUS_INPUT: "8px", // spacingScale(1)
  RADIUS_2: "16px", // spacingScale(2)
  RADIUS_3: "24px", // spacingScale(3)
  RADIUS_4: "32px", // spacingScale(4)
  RADIUS_5: "40px", // spacingScale(5)
  RADIUS_6: "48px", // spacingScale(6)
  RADIUS_7: "56px", // spacingScale(7)
  RADIUS_8: "64px", // spacingScale(8)

  // TYPOGRAPHY
  FONT_STACK_DEFAULT: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`,
  FONT_STACK_BRAND: `"Avenir Next", "Metropolis", "Helvetica Neue", Arial, sans-serif`,
  FONT_STACK_CODE: `"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace`,

  FONT_SIZE_PAGE_TITLE: "40px",
  FONT_SIZE_HEADING_DEFAULT: "36px", // Will be changed to 32px
  FONT_SIZE_TEXT_XL: "18px", // Will be changed to 24px
  FONT_SIZE_TEXT_LG: "16px", // Will be changed to 18px
  FONT_SIZE_TEXT_DEFAULT: "14px",
  FONT_SIZE_TEXT_SM: "11px", // Will be changed to 12px
  FONT_SIZE_TEXT_XS: "9px", // Will be changed to 10px

  LINE_HEIGHT_DEFAULT: 1.4,
  FONT_WEIGHT_DEFAULT: 400,
  FONT_WEIGHT_MEDIUM: 500,
  FONT_WEIGHT_SEMIBOLD: 600,
  FONT_WEIGHT_BOLD: 700
};

export const keenDark = {
  name: "KeenDark",

  COLOR_BRAND_PRIMARY: "#0aab2a",
  COLOR_BRAND_SECONDARY: "#0aab2a",
  COLOR_CONTENT_DEFAULT: "#FFF",

  COLOR_BACKGROUND_DEFAULT: "#000000",
  COLOR_BACKGROUND_TWO: "#222222",
  COLOR_BACKGROUND_THREE: "#FFFFFF",

  COLOR_INTENT_HIGHLIGHT: "#0aab2a",
  COLOR_INTENT_SUCCESS: "#0aab2a",
  COLOR_INTENT_DANGER: "#D83D22", // WCAG AA+
  COLOR_INTENT_WARNING: "#F7CD45", // WCAG AA+
  COLOR_INTENT_INFO: "#1E6DF6", // WCAG AA+

  COLOR_KEYLINE_DEFAULT: "rgba(255,255,255,0.16)",
  COLOR_KEYLINE_DEFAULT_SOLID: "#292929",

  OPACITY_FULL: "1",
  OPACITY_LIGHT: "0.7",
  OPACITY_LIGHTER: "0.5",
  OPACITY_LIGHTEST: "0.15",

  // LAYOUT
  BORDER_RADIUS_BASE: "3px", // Will be changed to 4px
  SPACING_BASE: 8,
  ICON_VIEWBOX_SIZE: 24, // Move to Icons component?

  ZINDEX_TOOLTIP: "1070",
  ZINDEX_STICKY: "1010",

  CORNER_RADIUS_SHARP: "4px", // spacingScale(0.5)
  CORNER_RADIUS_INPUT: "8px", // spacingScale(1)
  RADIUS_2: "16px", // spacingScale(2)
  RADIUS_3: "24px", // spacingScale(3)
  RADIUS_4: "32px", // spacingScale(4)
  RADIUS_5: "40px", // spacingScale(5)
  RADIUS_6: "48px", // spacingScale(6)
  RADIUS_7: "56px", // spacingScale(7)
  RADIUS_8: "64px", // spacingScale(8)

  // TYPOGRAPHY
  FONT_STACK_DEFAULT: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`,
  FONT_STACK_BRAND: `"Avenir Next", "Metropolis", "Helvetica Neue", Arial, sans-serif`,
  FONT_STACK_CODE: `"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace`,

  FONT_SIZE_PAGE_TITLE: "40px",
  FONT_SIZE_HEADING_DEFAULT: "36px", // Will be changed to 32px
  FONT_SIZE_TEXT_XL: "18px", // Will be changed to 24px
  FONT_SIZE_TEXT_LG: "16px", // Will be changed to 18px
  FONT_SIZE_TEXT_DEFAULT: "14px",
  FONT_SIZE_TEXT_SM: "11px", // Will be changed to 12px
  FONT_SIZE_TEXT_XS: "9px", // Will be changed to 10px

  LINE_HEIGHT_DEFAULT: 1.4,
  FONT_WEIGHT_DEFAULT: 400,
  FONT_WEIGHT_SEMIBOLD: 600,
  FONT_WEIGHT_BOLD: 800
};
