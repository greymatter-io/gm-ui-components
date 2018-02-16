import styled from "styled-components";
import PropTypes from "prop-types";

import { contrastColor } from "../../../../style/styleFunctions";
import generateButtonIconRatio from "./utils/generateButtonIconRatio";
import generateButtonOrientation from "./utils/generateButtonOrientation";
import generateButtonSize from "./utils/generateButtonSize";
import generateButtonStyle from "./utils/generateButtonStyle";

import { decipher } from "../../../../style/styleVariables";

const theme = decipher;

// Maps button types to a particular color
function generateButtonTypeColor(type) {
  switch (type) {
    case "danger":
      return theme.colorIntentDanger;
    case "info":
      return theme.colorIntentInfo;
    case "warning":
      return theme.colorIntentWarning;
    case "primary":
      return theme.colorIntentHighlight;
    default:
    case "default":
      return theme.colorBackground;
  }
}

const camelCaseConverter = stringInput => {
  if (stringInput) {
    return stringInput.replace(/-([a-z])/g, function (g) {
      return g[1].toUpperCase();
    });
  }
};

// The start of the CSS style output
const ButtonWrap = styled.button`
  font-family: ${theme.fontStackNormal};
  font-weight: ${theme.fontWeightControls};
  line-height: ${theme.lineHeightControls};
  transition: ${theme.transitionNormal};
  transitionDuration ${parseInt(theme.transitionDurationNormal, 10) * 2};
  box-sizing: border-box;
  user-select: none;
  border-width: 1px;
  border-style: solid;
  text-transform: none;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    transition: ${theme.transitionNormal};
  }

  &:focus,
  &:active {
    transition-duration: 0;
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
    props.iconSize
      ? generateButtonIconRatio(props.iconSize) // has iconSize
      : generateButtonIconRatio() // Orientation // no iconSize
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
  type: PropTypes.oneOf(["danger", "info", "warning", "primary"])
};

export default ButtonWrap;
