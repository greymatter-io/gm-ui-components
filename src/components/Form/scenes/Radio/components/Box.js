import styled from "styled-components";

import { COLOR_BRAND_A, COLOR_BACKGROUND_A } from "style/styleVariables";
import { spacingScale } from "style/styleFunctions";

const RADIO_COLOR = COLOR_BRAND_A;

const Box = styled.input.attrs({
  type: "radio"
})`
  box-shadow: inset 0 0 0 1px ${RADIO_COLOR};
  font-size: ${spacingScale(2)};
  color: ${COLOR_BACKGROUND_A};
  appearance: none;
  flex: 0 0 1em;
  height: 1em;
  width: 1em;
  position: relative;
  border-radius: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s ease;

  &:after {
    content: "";
    width: 0;
    height: 0;
    background-color: currentColor;
    border-radius: 200px;
    opacity: 0;
  }

  &:checked {
    background: ${RADIO_COLOR};

    &:after {
      opacity: 1;
      width: 0.25em;
      height: 0.25em;
    }
  }

  &:active {
    box-shadow: inset 0 0 0 2px ${RADIO_COLOR};
  }
`;

export default Box;
