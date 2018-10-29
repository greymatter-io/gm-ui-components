import styled from "styled-components";
import { readableColor } from "polished";

import { spacingScale } from "style/styleFunctions";

const HeaderContainer = styled.div`
  color: ${props => readableColor(props.theme.COLOR_BACKGROUND_C)};
  padding: ${spacingScale(1)} ${spacingScale(2)} ${spacingScale(1)};
  transition: all 0.1s ease;

  @media all and (min-width: 1000px) {
    padding: ${spacingScale(2)} ${spacingScale(2)} ${spacingScale(1)};
  }
`;

export default HeaderContainer;
