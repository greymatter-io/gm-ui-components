import styled, { css } from "styled-components";
import PropTypes from "prop-types";

import generateButtonOrientation from "./utils/generateButtonOrientation";
import generateButtonSize from "./utils/generateButtonSize";
import generateButtonStyle from "./utils/generateButtonStyle";

// The start of the CSS style output
const ButtonWrap = styled.button`
  align-items: center;
  border-style: solid;
  border-width: 1px;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  font-family: ${props => props.theme.FONT_STACK_BASE};
  font-weight: ${props => props.theme.FONT_WEIGHT_BASE};
  justify-content: center;
  line-height: 1.4;
  text-align: center;
  text-transform: none;
  transition: all 0.3s ease;
  user-select: none;

  ${props =>
    props.active &&
    css`
      transition-duration: 0s;
      filter: saturate(80%) brightness(90%) contrast(110%);
    `};

  &:hover {
    transition: all 0.1s ease;
  }

  &:focus,
  &:active {
    transition: all 0 ease;
  }

  > * {
    flex: 0 1 auto;
  }

  ${props => css`
    ${generateButtonStyle(props.theme, props.type, props.outline)}
    ${generateButtonSize(props.size)} 
    ${generateButtonOrientation(props.orientation)} 
  `};
`;

ButtonWrap.propTypes = {
  active: PropTypes.bool,
  orientation: PropTypes.string,
  outline: PropTypes.bool,
  size: PropTypes.oneOf(["normal", "xs", "sm", "lg", "xl"]),
  type: PropTypes.oneOf(["default", "danger", "info", "warning", "primary"])
};

export default ButtonWrap;
