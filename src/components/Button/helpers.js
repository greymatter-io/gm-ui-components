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
import { lighten, darken, complement } from "polished";

export const getColor = props => {
  switch (props.appearance) {
    case "warning":
      return {
        background: COLOR_WARNING,
        color: COLOR_PRIMARY,
        hover: lighten(0.1, COLOR_WARNING)
      };
      break;
    case "danger":
      return {
        background: COLOR_DANGER,
        color: COLOR_PRIMARY,
        hover: lighten(0.1, COLOR_DANGER)
      };
      break;
    case "info":
      return {
        background: COLOR_INFO,
        color: COLOR_PRIMARY,
        hover: lighten(0.1, COLOR_INFO)
      };
      break;
    default:
      return {
        background: COLOR_PRIMARY,
        color: "#333",
        hover: "#fbfbfb"
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
