import styled from "styled-components";
import { readableColor } from "polished";

import { spacingScale } from "style/styleFunctions";
import { COLOR_BACKGROUND_C } from "style/styleVariables";

const HeaderContainer = styled.div`
  color: ${readableColor(COLOR_BACKGROUND_C)};
  padding: ${spacingScale(1)} ${spacingScale(2)} ${spacingScale(1)};
  transition: all 0.1s ease;

  @media all and (min-width: 1000px) {
    padding: ${spacingScale(2)} ${spacingScale(2)} ${spacingScale(1)};
  }
`;

export default HeaderContainer;
