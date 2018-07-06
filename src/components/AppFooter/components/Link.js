import styled from "styled-components";
import { transparentize } from "polished";

import { contrastColor, spacingScale } from "style/styleFunctions";
import {
  COLOR_CONTENT_BACKGROUND,
  COLOR_HIGHLIGHT
} from "style/styleVariables";

const Link = styled.a`
  color: ${transparentize(0.5, contrastColor(COLOR_CONTENT_BACKGROUND, 1))};
  padding: 0 ${spacingScale(0.5)};

  &:hover {
    color: ${COLOR_HIGHLIGHT};
  }

  svg {
    height: 1.25em;
  }
`;

export default Link;
