import styled from "styled-components";

import { keen } from "style/styleVariables";

export const Wrapper = styled.section`
  width: 100%;
  font-family: ${({ theme }) => theme.FONT_STACK_BASE};
  border-top: 1px solid ${({ theme }) => theme.COLOR_KEYLINE};
  height: 100%;
`;

Wrapper.defaultProps = {
  theme: keen
};
