import {
  COLOR_HIGHLIGHT,
  COLOR_WHITE,
  COLOR_BLACK,
  COLOR_DANGER,
  COLOR_WARNING,
  COLOR_INFO,
  COLOR_SUCCESS,
  FONT_GROUP_SYSTEM,
  FONT_STACK_CODE,
  FONT_STACK_DATA_MONO,
  FONT_STACK_DATA,
  LINE_HEIGHT_BASE,
  FONT_WEIGHT_BASE,
  FONT_WEIGHT_CONTROLS,
  FONT_SIZE_HERO,
  FONT_SIZE_LG,
  FONT_SIZE_BASE,
  FONT_SIZE_SM,
  FONT_SIZE_XS
} from "../style/styleVariables";

const baseTheme = {
  colorBrandPrimary: "#094dff", // Apple blue
  colorBrandSecondary: "#eb0035", // Apple pink

  colorIntentHighlight: COLOR_HIGHLIGHT,
  colorIntentDanger: COLOR_DANGER,
  colorIntentWarning: COLOR_WARNING,
  colorIntentInfo: COLOR_INFO,
  colorIntentSuccess: COLOR_SUCCESS,

  colorBackground: COLOR_WHITE,
  colorContent: COLOR_BLACK,

  spacing: "8px",
  borderRadiusNormal: "6px",

  fontSizeNormal: FONT_SIZE_BASE,
  fontSizeXs: FONT_SIZE_XS,
  fontSizeSm: FONT_SIZE_SM,
  fontSizeLg: FONT_SIZE_LG,
  fontSizeXl: "32px",
  fontSizeHero: FONT_SIZE_HERO,

  lineHeightNormal: LINE_HEIGHT_BASE,
  lineHeightHeading: "1.1",
  lineHeightControls: "1.2",

  fontWeightNormal: FONT_WEIGHT_BASE,
  fontWeightHeadings: FONT_WEIGHT_BASE + 100,
  fontWeightControls: FONT_WEIGHT_CONTROLS,

  fontStackNormal: FONT_GROUP_SYSTEM,
  fontStackCode: FONT_STACK_CODE,
  fontStackData: FONT_STACK_DATA_MONO,
  fontStackDataMono: FONT_STACK_DATA,

  transitionDurationNormal: ".15s",
  transitionTimingFunction: "ease",
  transitionDelay: "0",
  transitionNormal: "all .15s ease"
};

export default baseTheme;
