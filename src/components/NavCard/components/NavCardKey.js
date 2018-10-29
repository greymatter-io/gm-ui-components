import styled, { css } from "styled-components";
import { readableColor, mix } from "polished";

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

const NavCardKey = styled.dt`
  ${color};
  opacity: ${props => props.theme.OPACITY_70};
  padding-right: ${spacingScale(1)};
  display: inline-block;
`;

export default NavCardKey;
