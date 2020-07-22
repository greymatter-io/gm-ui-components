import styled from "styled-components";

import { keen } from "style/theme";

const LayoutSectionWrap = styled.section`
  color: ${({ theme }) => theme.COLOR_CONTENT_DEFAULT};
  font-family: ${({ theme }) => theme.FONT_STACK_DEFAULT};
  align-items: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  padding: 1rem;

  &:not(:first-of-type) {
    margin-top: 4rem;
  }
`;

LayoutSectionWrap.defaultProps = {
  theme: keen
};

export default LayoutSectionWrap;
