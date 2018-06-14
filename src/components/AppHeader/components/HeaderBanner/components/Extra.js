import styled from "styled-components";

import {
  FONT_WEIGHT_SEMIBOLD,
  FONT_SIZE_SM,
  BORDER_RADIUS_BASE,
  COLOR_BLACK
} from "style/styleVariables";
import { contrastColor, spacingScale } from "style/styleFunctions";

// Z-index positions these above the preceding Banner Title in order to ensure they're visible above the Banner Title's shadow
const Extra = styled.a`
  background-color: ${contrastColor(COLOR_BLACK, 0.15)};
  border-radius: ${BORDER_RADIUS_BASE};
  bottom: ${spacingScale(0.5)};
  color: ${contrastColor(COLOR_BLACK, 0.9)};
  display: inline-block;
  font-size: ${FONT_SIZE_SM};
  font-weight: ${FONT_WEIGHT_SEMIBOLD};
  margin: ${spacingScale(1)};
  padding: ${spacingScale(0.25)} ${spacingScale(1)};
  position: relative;
  transition: all 0.15s ease;
  z-index: 2;
  text-decoration: none;

  &:not(:last-child) {
    margin-right: ${spacingScale(1)};
  }

  &:hover {
    background-color: ${contrastColor(COLOR_BLACK, 0.2)};
    color: ${contrastColor(COLOR_BLACK, 1)};
  }

  &:active {
    background-color: ${contrastColor(COLOR_BLACK, 0)};
    color: ${contrastColor(COLOR_BLACK, 1)};
  }
`;

export default Extra;
