import styled from "styled-components";

import { spacingScale } from "style/styleFunctions";
import {
  COLOR_INTENT_HIGHLIGHT,
  OPACITY_70,
  OPACITY_100,
  COLOR_CONTENT
} from "style/styleVariables";

const Link = styled.a`
  color: ${COLOR_CONTENT};
  opacity: ${OPACITY_70};
  padding: 0 ${spacingScale(0.5)};

  &:hover {
    color: ${COLOR_INTENT_HIGHLIGHT};
    opacity: ${OPACITY_100};
  }

  svg {
    height: ${spacingScale(2.25)};
  }
`;

export default Link;
