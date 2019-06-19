import styled, { css } from "styled-components";
import { transparentize } from "polished";

import { keen } from "style/styleVariables";

import { spacingScale } from "style/styleFunctions";

export const Opener = styled.div`
  margin-right: ${spacingScale(0.75)};
  &:focus,
  &:active,
  &:focus:active {
    outline: none;
    ${({ theme }) =>
      css`
        border-radius: ${theme.BORDER_RADIUS_BASE};
        box-shadow: 0 0 0 2px
          ${transparentize(1 - theme.OPACITY_50, theme.COLOR_INTENT_HIGHLIGHT)};
      `};
  }

  ${({ collapsed }) =>
    !collapsed &&
    css`
      transform: rotate(90deg);
    `}
`;

Opener.defaultProps = {
  theme: keen
};
