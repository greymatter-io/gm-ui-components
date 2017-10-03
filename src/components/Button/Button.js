import React from "react";
import styled from "styled-components";
import { PropTypes } from "prop-types";
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

const getColor = props => {
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

const getPadding = props => {
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

const Button = styled.button`
  box-sizing: border-box;
  user-select: none;
  overflow: hidden;
  color: ${props => (props.disabled ? "#bbb" : getColor(props).color)};
  border: none;
  width: ${props => (props.size === "fit" ? "100%" : "")};
  background: ${props =>
    props.disabled ? "#eee" : getColor(props).background};
  padding: ${props => getPadding(props)};
  transition: background 0.5s linear;
  text-align: center;
  cursor: ${props => (props.disabled ? "default" : "pointer")};
  font-family: ${FONT_GROUP_MAIN_TEXT};
  font-size: ${FONT_SIZE_BASE};
  &:hover {
    background: ${props => (props.disabled ? "#eee" : getColor(props).hover)};
  }
`;

Button.propTypes = {
  onClick: PropTypes.any.isRequired, // click handler
  size: PropTypes.oneOf(["sm", "md", "lg"]), // Relative size of the button
  type: PropTypes.oneOf(["danger", "info", "primary", "warning"])
};

export default Button;
