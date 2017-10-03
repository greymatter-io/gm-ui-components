import React from "react";
import styled from "styled-components";
import { PropTypes } from "prop-types";
import { getColor, getPadding } from "./helpers";
import {
  FONT_SIZE_BASE,
  FONT_GROUP_MAIN_TEXT
} from "../../style/fonts/fontVariables";

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
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "fit"]), // Relative size of the button
  type: PropTypes.oneOf(["danger", "info", "primary", "warning"])
};

export default Button;
