import styled, { css } from "styled-components";
import { mix, readableColor } from "polished";

import { spacingScale } from "style/styleFunctions";

const color = css`
  color: ${props =>
    readableColor(
      mix(
        props.theme.OPACITY_15,
        props.theme.COLOR_BACKGROUND_B,
        props.theme.COLOR_BACKGROUND_C
      )
    )};
`;

const NavCardDetails = styled.dl`
  ${color};
  margin: 0 ${spacingScale(0.5)} ${spacingScale(0.25)} ${spacingScale(4.5)}; /* Odd number required to align with title */
  font-size: ${props => props.theme.FONT_SIZE_SM};
  line-height: 1.2;

  &:last-child {
    margin-bottom: ${spacingScale(1)};
  }
`;

export default NavCardDetails;
