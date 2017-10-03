import {
  FONT_SIZE_BASE,
  FONT_GROUP_MAIN_TEXT,
  PADDING_BASE
} from "../../style/fonts/fontVariables";
import {
  COLOR_PRIMARY,
  COLOR_WARNING,
  COLOR_INFO,
  COLOR_DANGER,
  COLOR_SUCCESS,
  COLOR_BRAND_PRIMARY
} from "../../style/colorVariables";

export const getColor = props => {
  switch (props.type) {
    case "warning":
      return {
        background: COLOR_WARNING.string(),
        color: COLOR_PRIMARY.string(),
        hover: COLOR_WARNING.darken(0.2).string(),
        disabled: COLOR_WARNING.desaturate("100%")
      };
      break;
    case "danger":
      return {
        background: COLOR_DANGER.string(),
        color: COLOR_PRIMARY.string(),
        hover: COLOR_DANGER.darken(0.2).string()
      };
      break;
    case "info":
      return {
        background: COLOR_INFO.string(),
        color: COLOR_PRIMARY.string(),
        hover: COLOR_INFO.darken(0.2).string()
      };
      break;
    default:
      return {
        background: COLOR_PRIMARY.string(),
        color: "#000",
        hover: COLOR_PRIMARY.darken(0.05).string()
      };
  }
};

export const getPadding = props => {
  switch (props.size) {
    case "xs":
      return "4px";
      break;
    case "sm":
      return "8px";
      break;
    case "md":
      return "12px 16px";
      break;
    case "lg":
      return "12px 40px";
      break;
    default:
      return "12px";
  }
};
