import styled from "styled-components";

import { contrastColor, spacingScale } from "style/styleFunctions";
import { COLOR_BLACK } from "style/styleVariables";

const HeaderContainer = styled.div`
  color: ${contrastColor(COLOR_BLACK, 1)};
  padding: ${spacingScale(1)} ${spacingScale(2)} ${spacingScale(1)};
  transition: all 0.1s ease;

  @media all and (min-width: 1000px) {
    padding: ${spacingScale(2)} ${spacingScale(2)} ${spacingScale(1)};
  }
`;

export default HeaderContainer;
