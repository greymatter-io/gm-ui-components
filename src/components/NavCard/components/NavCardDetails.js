import styled, { css } from "styled-components";
import { mix, readableColor } from "polished";

import { keen } from "style/theme";

const color = css`
  color: ${({ theme }) =>
    readableColor(
      mix(
        theme.OPACITY_LIGHTEST,
        theme.COLOR_BACKGROUND_TWO,
        theme.COLOR_BACKGROUND_THREE
      )
    )};
`;

const NavCardDetails = styled.dl`
  ${color};
  margin: 0 0.5rem 0.25rem 4.5rem; /* Odd number required to align with title */
  font-size: ${({ theme }) => theme.FONT_SIZE_TEXT_SM};
  line-height: 1.2;

  &:last-child {
    margin-bottom: 1rem;
  }
`;

NavCardDetails.defaultProps = {
  theme: keen
};

export default NavCardDetails;
