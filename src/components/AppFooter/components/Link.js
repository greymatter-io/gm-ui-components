import styled from "styled-components";

import { spacingScale } from "style/styleFunctions";

const Link = styled.a`
  color: ${props => props.theme.COLOR_CONTENT};
  opacity: ${props => props.theme.OPACITY_70};
  padding: 0 ${spacingScale(0.5)};

  &:hover {
    color: ${props => props.theme.COLOR_INTENT_HIGHLIGHT};
    opacity: ${props => props.theme.OPACITY_100};
  }

  svg {
    height: ${spacingScale(2.25)};
  }
`;

export default Link;
