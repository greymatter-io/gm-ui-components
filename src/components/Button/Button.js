import React from "react";
import styled from "styled-components";
import { PropTypes } from "prop-types";
import { getColor, getPadding } from "./helpers";
import { lighten } from "polished";
import { FONT_SIZE_BASE } from "../../style/fonts/fontVariables";

const Button = styled.button.attrs({
  type: "button" // defaults to button rather than submit
})`
  box-sizing: border-box;
  user-select: none;
  overflow: hidden;
  color: ${props => (props.disabled ? "#bbb" : getColor(props).color)};
  border: 1px solid #f0f0f0;
  border-radius: 3px;
  border-top-color: ${lighten("3%", "#ececec")};
  border-bottom-color: #cdcdcd;
  box-shadow: inset 0 0 0 rgba(0, 0, 0, 0), 0 0 0 rgba(0, 0, 0, 0),
    0 0 0 rgba(0, 0, 0, 0);
  width: ${props => (props.size === "fit" ? "100%" : "fit-content")};
  background: ${props =>
    props.disabled ? "#eee" : getColor(props).background};
  padding: ${props => getPadding(props)};
  text-align: center;
  cursor: ${props => (props.disabled ? "default" : "pointer")};
  font-size: ${FONT_SIZE_BASE};
  &:hover {
    background: ${props =>
      props.disabled ? "#fbfbfb" : getColor(props).hover};
  }
`;

Button.defaultProps = {
  size: "md",
  appearance: "primary"
};

Button.propTypes = {
  onClick: PropTypes.any.isRequired, // click handler
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "fit"]), // Relative size of the button
  appearance: PropTypes.oneOf(["danger", "info", "primary", "warning"])
};

export default Button;
