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

const NavCardTitle = styled.div`
  ${color};
  margin: 0.5rem 1rem 0;
  white-space: nowrap;
  max-width: 100%;
  overflow: hidden;
  align-items: center;
  text-overflow: ellipsis;
  display: flex;
  flex-direction: row;
  justify-content: center;

  h1 {
    font-size: ${({ theme }) => theme.FONT_SIZE_TEXT_DEFAULT};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT_SEMIBOLD};
    padding-left: 0.5rem;
    flex: 1 1 100%;
    line-height: 1;
    margin: 0;
    text-transform: capitalize;
  }
`;

NavCardTitle.defaultProps = {
  theme: keen
};

export default NavCardTitle;
