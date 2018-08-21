import styled from "styled-components";

import { COLOR_BRAND_PRIMARY, BORDER_RADIUS_BASE, FONT_SIZE_BASE, COLOR_BACKGROUND_A } from "style/styleVariables";
import { spacingScale } from "style/styleFunctions";

const CHECKBOX_COLOR = COLOR_BRAND_PRIMARY;

const Box = styled.input.attrs({
  type: "checkbox"
})`
  appearance: none;
  box-shadow: inset 0 0 0 1px ${CHECKBOX_COLOR};
  height: ${spacingScale(2)};
  width: ${spacingScale(2)};
  position: relative;
  border-radius: ${BORDER_RADIUS_BASE};
  display: flex;
  align-items: center;
  justify-content: center;

  &:checked {
    background: ${CHECKBOX_COLOR};

    &:after {
      content: "\u2714";
      font-size: ${FONT_SIZE_BASE};
      color: ${COLOR_BACKGROUND_A};
    }
  }
`;

export default Box;
