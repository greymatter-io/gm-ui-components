import styled from "styled-components";

import { keen } from "style/theme";

export const Wrapper = styled.section`
  width: 100%;
  font-family: ${({ theme }) => theme.FONT_STACK_DEFAULT};
  border-top: 1px solid ${({ theme }) => theme.COLOR_KEYLINE_DEFAULT};
  height: 100%;
`;

Wrapper.defaultProps = {
  theme: keen
};
