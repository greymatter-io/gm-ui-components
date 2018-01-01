import { contrastColor } from "style/styleFunctions";
import { COLOR_BRAND_PRIMARY, COLOR_WHITE } from "style/styleVariables";
import { darkenColor, lightenColor } from "style/styleFunctions";

/**
 * Utility function that transforms an object containing different attributes
 * into a block of CSS attributes dealing with buton styles
 *
 * @param {any} {
 *   buttonBackgroundColorBase = COLOR_WHITE,
 *   buttonBorderColorBase = COLOR_WHITE,
 *   buttonLabelColorBase = contrastColor(COLOR_WHITE, 100),
 *   buttonActiveStatus = false,
 *   buttonOutlineStyle = "raisedOutline",
 *   buttonOutlineStyleDepth = 0.06, // 0-100% // default: 6%,
 *   buttonReactionStyle = "darken", // darken, lighten // default: darken
 *   buttonReactionDegree = 0.06, // 0-100% // default: 6%
 *   buttonHoverReactionDegree = 0.06 * 0.25,
 *   buttonActiveReactionDegree = 0.06 * 2,
 *   buttonDownReactionDegree = 0.06,
 *   buttonActiveMixBaseColor = COLOR_BRAND_PRIMARY,
 *   buttonActiveMixBaseLabelColor = contrastColor(COLOR_BRAND_PRIMARY, 100),
 *   buttonActiveMixDegree = 1 //default 100%
 * }
 * @returns string
 */
function generateButtonStyle({
  buttonBackgroundColorBase = COLOR_WHITE,
  buttonBorderColorBase = COLOR_WHITE,
  buttonLabelColorBase = contrastColor(COLOR_WHITE, 100),
  buttonActiveStatus = false,
  buttonOutlineStyle = "raisedOutline",
  buttonOutlineStyleDepth = 0.06, // 0-100% // default: 6%,
  buttonReactionStyle = "darken", // darken, lighten // default: darken
  buttonReactionDegree = 0.06, // 0-100% // default: 6%
  buttonHoverReactionDegree = 0.06 * 0.25,
  buttonActiveReactionDegree = 0.06 * 2,
  buttonDownReactionDegree = 0.06,
  buttonActiveMixBaseColor = COLOR_BRAND_PRIMARY,
  buttonActiveMixBaseLabelColor = contrastColor(COLOR_BRAND_PRIMARY, 100),
  buttonActiveMixDegree = 1 //default 100%
}) {
  // default style Types (static, hover, down, active, activeDown)
  // this object feeds all the css at the bottom of the function
  // in this object we unite defaults with inputs
  let styleTypes = {
    staticStyles: {
      backgroundColor: buttonBackgroundColorBase,
      color: buttonLabelColorBase,
      borderColor: buttonBorderColorBase
    },
    hoverStyles: {},
    downStyles: {},
    activeStyles: {},
    activeDownStyles: {}
  };

  // Create style for each property, in each state, under each processed condition
  if (buttonReactionStyle === "darken") {
    // Hover Styles
    styleTypes.hoverStyles["backgroundColor"] = darkenColor(
      buttonBackgroundColorBase,
      buttonHoverReactionDegree
    );
    styleTypes.hoverStyles["color"] = darkenColor(
      buttonLabelColorBase,
      buttonHoverReactionDegree
    );
    styleTypes.hoverStyles["borderColor"] = darkenColor(
      buttonBorderColorBase,
      buttonHoverReactionDegree
    );
    // Down Styles
    styleTypes.downStyles["backgroundColor"] = darkenColor(
      buttonBackgroundColorBase,
      buttonHoverReactionDegree + buttonDownReactionDegree
    );
    styleTypes.downStyles["color"] = darkenColor(
      buttonLabelColorBase,
      buttonHoverReactionDegree + buttonDownReactionDegree
    );
    styleTypes.downStyles["borderColor"] = darkenColor(
      buttonBorderColorBase,
      buttonHoverReactionDegree + buttonDownReactionDegree
    );
    // Active Styles
    styleTypes.activeStyles["backgroundColor"] = darkenColor(
      buttonBackgroundColorBase,
      buttonActiveReactionDegree
    ).mix(buttonActiveMixBaseColor, buttonActiveMixDegree);
    styleTypes.activeStyles["color"] = darkenColor(
      buttonLabelColorBase,
      buttonActiveReactionDegree
    ).mix(buttonActiveMixBaseLabelColor, buttonActiveMixDegree);
    styleTypes.activeStyles["borderColor"] = darkenColor(
      buttonBorderColorBase.mix(
        buttonActiveMixBaseColor,
        buttonActiveMixDegree
      ),
      buttonActiveReactionDegree + buttonDownReactionDegree
    );
    // Active Down Styles
    styleTypes.activeDownStyles["backgroundColor"] = darkenColor(
      buttonBackgroundColorBase,
      buttonActiveReactionDegree + buttonDownReactionDegree
    ).mix(buttonActiveMixBaseColor, buttonActiveMixDegree);
    styleTypes.activeDownStyles["color"] = darkenColor(
      buttonLabelColorBase,
      buttonActiveReactionDegree + buttonDownReactionDegree
    ).mix(buttonActiveMixBaseLabelColor, buttonActiveMixDegree);
    styleTypes.activeDownStyles["borderColor"] = darkenColor(
      buttonBorderColorBase,
      buttonActiveReactionDegree + buttonDownReactionDegree
    ).mix(buttonActiveMixBaseColor, buttonActiveMixDegree);
  } else {
    // Assume button reaction style == lighten
    // Hover Styles
    styleTypes.hoverStyles["backgroundColor"] = lightenColor(
      buttonBackgroundColorBase,
      buttonHoverReactionDegree
    );
    styleTypes.hoverStyles["color"] = lightenColor(
      buttonLabelColorBase,
      buttonHoverReactionDegree
    );
    styleTypes.hoverStyles["borderColor"] = lightenColor(
      buttonBorderColorBase,
      buttonHoverReactionDegree
    );
    // Down Styles
    styleTypes.downStyles["backgroundColor"] = lightenColor(
      buttonBackgroundColorBase,
      buttonHoverReactionDegree + buttonDownReactionDegree
    );
    styleTypes.downStyles["color"] = lightenColor(
      buttonLabelColorBase,
      buttonHoverReactionDegree + buttonDownReactionDegree
    );
    styleTypes.downStyles["borderColor"] = lightenColor(
      buttonBorderColorBase,
      buttonHoverReactionDegree + buttonDownReactionDegree
    );
    // Active Styles
    styleTypes.activeStyles["backgroundColor"] = lightenColor(
      buttonBackgroundColorBase,
      buttonActiveReactionDegree
    ).mix(buttonActiveMixBaseColor, buttonActiveMixDegree);
    styleTypes.activeStyles["color"] = lightenColor(
      buttonLabelColorBase,
      buttonActiveReactionDegree
    ).mix(buttonActiveMixBaseLabelColor, buttonActiveMixDegree);
    styleTypes.activeStyles["borderColor"] = lightenColor(
      buttonBorderColorBase,
      buttonActiveReactionDegree
    ).mix(buttonActiveMixBaseColor, buttonActiveMixDegree);
    // Active Down Styles
    styleTypes.activeDownStyles["backgroundColor"] = lightenColor(
      buttonBackgroundColorBase,
      buttonActiveReactionDegree + buttonDownReactionDegree
    ).mix(buttonActiveMixBaseColor, buttonActiveMixDegree);
    styleTypes.activeDownStyles["color"] = lightenColor(
      buttonLabelColorBase,
      buttonActiveReactionDegree + buttonDownReactionDegree
    ).mix(buttonActiveMixBaseLabelColor, buttonActiveMixDegree);
    styleTypes.activeDownStyles["borderColor"] = lightenColor(
      buttonBorderColorBase,
      buttonActiveReactionDegree + buttonDownReactionDegree
    ).mix(buttonActiveMixBaseColor, buttonActiveMixDegree);
  }

  // Generation of outline styles based on styleOptions and styleTypes objects
  const buttonOutlineStyles = {
    raisedOutline: {
      staticStyles: {
        borderColor: darkenColor(
          styleTypes.staticStyles.borderColor,
          buttonOutlineStyleDepth
        ),
        borderTopColor: lightenColor(
          styleTypes.staticStyles.borderColor,
          buttonOutlineStyleDepth * 0.5
        ),
        borderBottomColor: darkenColor(
          styleTypes.staticStyles.borderColor,
          buttonOutlineStyleDepth * 3
        )
      },
      hoverStyles: {
        borderColor: darkenColor(
          styleTypes.hoverStyles.borderColor,
          buttonOutlineStyleDepth
        ),
        borderTopColor: lightenColor(
          styleTypes.hoverStyles.borderColor,
          buttonOutlineStyleDepth * 0.5
        ),
        borderBottomColor: darkenColor(
          styleTypes.hoverStyles.borderColor,
          buttonOutlineStyleDepth * 3
        )
      },
      downStyles: {
        borderColor: darkenColor(
          styleTypes.downStyles.borderColor,
          buttonOutlineStyleDepth
        ),
        borderTopColor: lightenColor(
          styleTypes.downStyles.borderColor,
          buttonOutlineStyleDepth * 0.5
        ),
        borderBottomColor: darkenColor(
          styleTypes.downStyles.borderColor,
          buttonOutlineStyleDepth * 3
        )
      },
      activeStyles: {
        borderColor: darkenColor(
          styleTypes.activeStyles.borderColor,
          buttonOutlineStyleDepth
        ),
        borderTopColor: lightenColor(
          styleTypes.activeStyles.borderColor,
          buttonOutlineStyleDepth * 0.5
        ),
        borderBottomColor: darkenColor(
          styleTypes.activeStyles.borderColor,
          buttonOutlineStyleDepth * 3
        )
      },
      activeDownStyles: {
        borderColor: darkenColor(
          styleTypes.activeDownStyles.borderColor,
          buttonOutlineStyleDepth
        ),
        borderTopColor: lightenColor(
          styleTypes.activeDownStyles.borderColor,
          buttonOutlineStyleDepth * 0.5
        ),
        borderBottomColor: darkenColor(
          styleTypes.activeDownStyles.borderColor,
          buttonOutlineStyleDepth * 3
        )
      }
    },
    shadow: {
      staticStyles: {
        borderBottomColor: darkenColor(
          styleTypes.staticStyles.borderColor,
          buttonOutlineStyleDepth
        )
      },
      hoverStyles: {
        borderBottomColor: darkenColor(
          styleTypes.hoverStyles.borderColor,
          buttonOutlineStyleDepth
        )
      },
      downStyles: {
        borderBottomColor: darkenColor(
          styleTypes.downStyles.borderColor,
          buttonOutlineStyleDepth
        )
      },
      activeStyles: {
        borderBottomColor: darkenColor(
          styleTypes.activeStyles.borderColor,
          buttonOutlineStyleDepth
        )
      },
      activeDownStyles: {
        borderBottomColor: darkenColor(
          styleTypes.activeDownStyles.borderColor,
          buttonOutlineStyleDepth
        )
      }
    },
    raised: {
      staticStyles: {
        borderTopColor: lightenColor(
          styleTypes.staticStyles.borderColor,
          buttonOutlineStyleDepth
        ),
        borderBottomColor: darkenColor(
          styleTypes.staticStyles.borderColor,
          buttonOutlineStyleDepth
        )
      },
      hoverStyles: {
        borderTopColor: lightenColor(
          styleTypes.hoverStyles.borderColor,
          buttonOutlineStyleDepth
        ),
        borderBottomColor: darkenColor(
          styleTypes.hoverStyles.borderColor,
          buttonOutlineStyleDepth
        )
      },
      downStyles: {
        borderTopColor: lightenColor(
          styleTypes.downStyles.borderColor,
          buttonOutlineStyleDepth
        ),
        borderBottomColor: darkenColor(
          styleTypes.downStyles.borderColor,
          buttonOutlineStyleDepth
        )
      },
      activeStyles: {
        borderTopColor: lightenColor(
          styleTypes.activeStyles.borderColor,
          buttonOutlineStyleDepth
        ),
        borderBottomColor: darkenColor(
          styleTypes.activeStyles.borderColor,
          buttonOutlineStyleDepth
        )
      },
      activeDownStyles: {
        borderTopColor: lightenColor(
          styleTypes.activeDownStyles.borderColor,
          buttonOutlineStyleDepth
        ),
        borderBottomColor: darkenColor(
          styleTypes.activeDownStyles.borderColor,
          buttonOutlineStyleDepth
        )
      }
    },
    outline: {
      staticStyles: {
        borderColor: darkenColor(
          styleTypes.staticStyles.borderColor,
          buttonOutlineStyleDepth
        )
      },
      hoverStyles: {
        borderColor: darkenColor(
          styleTypes.hoverStyles.borderColor,
          buttonOutlineStyleDepth
        )
      },
      downStyles: {
        borderColor: darkenColor(
          styleTypes.downStyles.borderColor,
          buttonOutlineStyleDepth
        )
      },
      activeStyles: {
        borderColor: darkenColor(
          styleTypes.activeStyles.borderColor,
          buttonOutlineStyleDepth
        )
      },
      activeDownStyles: {
        borderColor: darkenColor(
          styleTypes.activeDownStyles.borderColor,
          buttonOutlineStyleDepth
        )
      }
    },
    none: {
      staticStyles: {
        borderColor: styleTypes.staticStyles.backgroundColor
      },
      activeStyles: {
        borderColor: styleTypes.activeStyles.backgroundColor
      }
    }
  };

  // Distribute generated outline styles based on the input
  // by overwriting default generated outline styles
  const outlineOptionsTypes = buttonOutlineStyles[buttonOutlineStyle];
  const outlineOptionTypesKeys = Object.keys(outlineOptionsTypes);
  // Loop through generated buttonOutlineStyles that correspond to the input outline Style (raised, raisedOutline, none, shadow, etc.)
  for (let x = 0, len = outlineOptionTypesKeys.length; x < len; x++) {
    // Then look into each Type (static, active, activeDown) within
    // styleTypes object (which is the output that feeds the css styles at the bottom)
    // and either supplement or overwrite existing properties
    // based on the information that is within generated outline styles
    let outlineOptionKeys = Object.keys(
      outlineOptionsTypes[outlineOptionTypesKeys[x]]
    );
    for (let y = 0, len = outlineOptionKeys.length; y < len; y++) {
      styleTypes[outlineOptionTypesKeys[x]][outlineOptionKeys[y]] =
        outlineOptionsTypes[outlineOptionTypesKeys[x]][outlineOptionKeys[y]];
    }
  }

  const baseStyles = buttonActiveStatus
    ? styleTypes.activeStyles
    : styleTypes.staticStyles;
  const downStyles = buttonActiveStatus
    ? styleTypes.activeDownStyles
    : styleTypes.downStyles;
  const hoverStyles = buttonActiveStatus
    ? styleTypes.activeStyles
    : styleTypes.hoverStyles;

  return `
  background-color: ${baseStyles["backgroundColor"].string()};
  border-color: ${baseStyles["borderColor"].string()};
  ${
    baseStyles["borderTopColor"]
      ? `border-top-color: ${baseStyles["borderTopColor"].string()};`
      : ""
  }
  ${
    baseStyles["borderBottomColor"]
      ? `border-bottom-color: ${baseStyles["borderBottomColor"].string()};`
      : ""
  }
  color: ${baseStyles["color"].string()};
  &:active {
    ${!buttonActiveStatus ? "transition-duration: 0s;" : ""}
    background-color: ${downStyles["backgroundColor"].string()};
    border-color: ${downStyles["borderColor"].string()};
    ${
      downStyles["borderTopColor"]
        ? `border-top-color: ${downStyles["borderTopColor"].string()};`
        : ""
    }
    ${
      downStyles["borderBottomColor"]
        ? `border-bottom-color: ${downStyles["borderBottomColor"].string()};`
        : ""
    }
    color: ${downStyles["color"].string()};
  }

  &:hover {
    background-color: ${hoverStyles["backgroundColor"].string()};
    border-color: ${hoverStyles["borderColor"].string()};
    ${
      hoverStyles["borderTopColor"]
        ? `border-top-color: ${hoverStyles["borderTopColor"].string()};`
        : ""
    }
    ${
      hoverStyles["borderBottomColor"]
        ? `border-bottom-color: ${hoverStyles["borderBottomColor"].string()};`
        : ""
    }
    color: ${hoverStyles["color"].string()};
  } 

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #0aab2a;
    z-index: 1;
  }

  &[disabled],
  &[disabled]:hover,
  &[disabled]:focus,
  &[disabled]:active {
    cursor: default;
    opacity: 0.8;
    background-color: ${darkenColor(
      buttonBackgroundColorBase.desaturate(1),
      buttonReactionDegree
    ).string()};
    border-color: ${darkenColor(
      buttonBorderColorBase.desaturate(1),
      buttonReactionDegree
    ).string()};
    color: ${darkenColor(
      buttonLabelColorBase.desaturate(1),
      buttonReactionDegree
    ).string()};
  }
`;
}

export default generateButtonStyle;
