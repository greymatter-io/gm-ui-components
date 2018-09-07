import styled from "styled-components";

import { COLOR_BRAND_A, BORDER_RADIUS_BASE, COLOR_BACKGROUND_A } from "style/styleVariables";
import { spacingScale } from "style/styleFunctions";

const CHECKBOX_COLOR = COLOR_BRAND_A;

const Box = styled.input.attrs({
  type: "checkbox"
})`
  box-shadow: inset 0 0 0 1px ${CHECKBOX_COLOR};
  font-size: ${spacingScale(2)};
  color: ${COLOR_BACKGROUND_A};
  appearance: none;
  flex: 0 0 1em;
  height: 1em;
  width: 1em;
  position: relative;
  border-radius: ${BORDER_RADIUS_BASE};
  display: flex;
  align-items: center;
  justify-content: center;

  &:checked {
    background: ${CHECKBOX_COLOR};

    &:after {
      content: '';
      width: 25%;
      height: 50%;
      border: 2px solid;
      border-radius: 1px;
      border-width: 0 2px 2px 0;
      transform: translateY(-15%) rotate(45deg);
    }
  }
`;

export default Box;
