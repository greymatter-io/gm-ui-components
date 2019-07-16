import styled, { css } from "styled-components";

import { keen } from "style/theme";

export const Wrapper = styled.section`
  width: 100%;
  transition: all 0.25s ease;
  min-height: 3.4rem;
  font-family: ${({ theme }) => theme.FONT_STACK_DEFAULT};
  border-top: 1px solid ${({ theme }) => theme.COLOR_KEYLINE_DEFAULT};

  ${({ isOpen }) =>
    isOpen &&
    css`
      overflow: visible;
    `};
`;

Wrapper.defaultProps = {
  theme: keen
};
