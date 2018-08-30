import styled from "styled-components";

import {
  FONT_SIZE_TITLE,
  FONT_STACK_BRAND,
  FONT_WEIGHT_BASE,
  COLOR_BACKGROUND_C
} from "style/styleVariables";
import { spacingScale } from "style/styleFunctions";

const Header = styled.h1`
  font-size: ${FONT_SIZE_TITLE};
  font-family: ${FONT_STACK_BRAND};
  font-weight: ${FONT_WEIGHT_BASE};
  margin: 0;
  display: inline-block;
  line-height: 1.2;
  max-width: 100%;
  position: relative;
  text-transform: capitalize;
  z-index: 1;

  &::before {
    background-color: ${COLOR_BACKGROUND_C};
    content: "";
    display: block;
    filter: blur(${spacingScale(1.5)});
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 108%;
    z-index: -1;
  }
`;

export default Header;
