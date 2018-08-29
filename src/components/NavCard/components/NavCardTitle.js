import styled from "styled-components";
import {mix, readableColor } from 'polished';

import { spacingScale } from "style/styleFunctions";
import {
  FONT_WEIGHT_SEMIBOLD,
  FONT_SIZE_BASE,
  OPACITY_15,
  COLOR_BACKGROUND_B,
  COLOR_BACKGROUND_C
} from "style/styleVariables";

const COLOR_TAB_BACKGROUND_BASE = mix(OPACITY_15, COLOR_BACKGROUND_B, COLOR_BACKGROUND_C);


const NavCardTitle = styled.div`
  color: ${readableColor(COLOR_TAB_BACKGROUND_BASE)};
  margin: ${spacingScale(0.5)} ${spacingScale(1)} ${spacingScale(0)};
  white-space: nowrap;
  max-width: 100%;
  overflow: hidden;
  align-items: center;
  text-overflow: ellipsis;
  display: flex;
  flex-direction: row;
  justify-content: center;

  h1 {
    font-size: ${FONT_SIZE_BASE};
    font-weight: ${FONT_WEIGHT_SEMIBOLD};
    padding-left: ${spacingScale(0.5)};
    flex: 1 1 100%;
    line-height: 1;
    margin: 0;
    text-transform: capitalize;
  }
`;

export default NavCardTitle;
