import styled from "styled-components";
import { readableColor, mix } from 'polished';

import {
  FONT_WEIGHT_SEMIBOLD,
  FONT_SIZE_SM,
  BORDER_RADIUS_BASE,
  COLOR_BACKGROUND_A,
  COLOR_BACKGROUND_B,
  COLOR_BACKGROUND_C,
  OPACITY_15,
  OPACITY_50,
  FONT_STACK_BASE
} from "style/styleVariables";
import { spacingScale } from "style/styleFunctions";

// Z-index positions these above the preceding Banner Title in order to ensure they're visible above the Banner Title's shadow
const Extra = styled.a`
  font-family: ${FONT_STACK_BASE};
  color: ${readableColor(COLOR_BACKGROUND_C)};
  background: ${mix(OPACITY_15, COLOR_BACKGROUND_A, COLOR_BACKGROUND_C)};
  border-radius: ${BORDER_RADIUS_BASE};
  font-size: ${FONT_SIZE_SM};
  font-weight: ${FONT_WEIGHT_SEMIBOLD};
  padding: ${spacingScale(0.25)} ${spacingScale(1)};
  margin: ${spacingScale(1)};
  bottom: ${spacingScale(0.5)};
  display: inline-block;
  position: relative;
  transition: all 0.15s ease;
  z-index: 2;
  text-decoration: none;

  &:not(:last-child) {
    margin-right: ${spacingScale(1)};
  }

  &:hover {
    background: ${mix(OPACITY_50, COLOR_BACKGROUND_B, COLOR_BACKGROUND_C)};
  }
`;

export default Extra;
