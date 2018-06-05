import styled from "styled-components";
import PropTypes from "prop-types";

import { contrastColor } from "style/styleFunctions";
import generateButtonOrientation from "./utils/generateButtonOrientation";
import generateButtonSize from "./utils/generateButtonSize";
import generateButtonStyle from "./utils/generateButtonStyle";

import {
  COLOR_BRAND_PRIMARY,
  COLOR_DANGER,
  COLOR_INFO,
  COLOR_WARNING,
  COLOR_CONTENT_BACKGROUND,
  FONT_WEIGHT_SEMIBOLD,
  FONT_STACK_BASE
} from "style/styleVariables";

// Maps button types to a particular color
function generateButtonTypeColor(type) {
  switch (type) {
    case "danger":
      return COLOR_DANGER;
    case "info":
      return COLOR_INFO;
    case "warning":
      return COLOR_WARNING;
    case "polling":
      return COLOR_CONTENT_BACKGROUND;
    case "primary":
      return COLOR_BRAND_PRIMARY;
    default:
    case "default":
      return COLOR_CONTENT_BACKGROUND;
  }
}

const camelCaseConverter = stringInput => {
  if (stringInput) {
    return stringInput.replace(/-([a-z])/g, function(g) {
      return g[1].toUpperCase();
    });
  }
};

// The start of the CSS style output
const ButtonWrap = styled.button`
  font-family: ${FONT_STACK_BASE};
  box-sizing: border-box;
  user-select: none;
  font-weight: ${FONT_WEIGHT_SEMIBOLD};
  border-width: 1px;
  line-height: 1.4;
  border-style: solid;
  text-transform: none;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;

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

  ${props => `
    ${
      props.type
        ? generateButtonStyle({
            buttonOutlineStyle: camelCaseConverter(props.outline),
            buttonBackgroundColorBase: generateButtonTypeColor(props.type),
            buttonBorderColorBase: generateButtonTypeColor(props.type),
            buttonLabelColorBase: contrastColor(
              generateButtonTypeColor(props.type),
              1
            ),
            buttonActiveStatus: props.active
          }) // has color (also code in props.outline and props.active)
        : generateButtonStyle({
            buttonOutlineStyle: camelCaseConverter(props.outline),
            buttonActiveStatus: props.active
          }) // no color
    }
    ${
      props.size
        ? generateButtonSize(props.size) // has size
        : generateButtonSize() // Icons // no size
    } 
    ${
      props.orientation
        ? generateButtonOrientation(props.orientation) // has orientation
        : generateButtonOrientation() // no orientation default horizontal
    } 
  `};
`;

// might have to add 'open' prop to satisfy condition in the generateButtonStyles.
ButtonWrap.propTypes = {
  active: PropTypes.bool,
  orientation: PropTypes.string,
  outline: PropTypes.oneOf([
    "raised", // Add highlight effect to top edge and shadow effect to bottom edge
    "outline", // Add outline effect
    "shadow", // Add shadow effect to bottom edge
    "none", // No effects
    "raised-outline"
  ]),
  size: PropTypes.string,
  type: PropTypes.oneOf([
    "default",
    "danger",
    "info",
    "warning",
    "primary",
    "polling"
  ])
};

export default ButtonWrap;
