import styled, { css } from "styled-components";
import { readableColor, mix } from "polished";

import { spacingScale } from "style/styleFunctions";
import { keen } from "style/theme";

const color = css`
  color: ${props =>
    readableColor(
      mix(
        props.theme.OPACITY_LIGHTEST,
        props.theme.COLOR_BACKGROUND_TWO,
        props.theme.COLOR_BACKGROUND_THREE
      )
    )};
`;

const NavCardKey = styled.dt`
  ${color};
  opacity: ${props => props.theme.OPACITY_LIGHT};
  padding-right: ${spacingScale(1)};
  display: inline-block;
`;

NavCardKey.defaultProps = {
  theme: keen
};

export default NavCardKey;
