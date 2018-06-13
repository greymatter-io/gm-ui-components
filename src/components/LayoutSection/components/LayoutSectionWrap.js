import styled from "styled-components";

import { spacingScale } from "style/styleFunctions";
import { COLOR_CONTENT, FONT_STACK_BASE } from "style/styleVariables";

const LayoutSectionWrap = styled.section`
  align-items: stretch;
  color: ${COLOR_CONTENT};
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  padding: ${spacingScale(1)};
  font-family: ${FONT_STACK_BASE};

  &:not(:first-of-type) {
    margin-top: ${spacingScale(4)};
  }

  ${props => props.stretchSection && `flex: 1 0 auto;`};
`;

export default LayoutSectionWrap;
