import styled from "styled-components";

import { spacingScale } from "style/styleFunctions";
import { keen } from "style/styleVariables";

const LayoutSectionWrap = styled.section`
  color: ${props => props.theme.COLOR_CONTENT};
  font-family: ${props => props.theme.FONT_STACK_BASE};
  align-items: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  padding: ${spacingScale(1)};

  &:not(:first-of-type) {
    margin-top: ${spacingScale(4)};
  }
`;

LayoutSectionWrap.defaultProps = {
  theme: keen
};

export default LayoutSectionWrap;
