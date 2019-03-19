import styled from "styled-components";

import { spacingScale } from "style/styleFunctions";

const HeaderContainer = styled.div`
  color: ${props => props.theme.COLOR_CONTENT};
  padding: ${spacingScale(1)} ${spacingScale(2)} ${spacingScale(1)};
  transition: all 0.1s ease;

  @media all and (min-width: 1000px) {
    padding: ${spacingScale(2)} ${spacingScale(2)} ${spacingScale(1)};
  }
`;

export default HeaderContainer;
