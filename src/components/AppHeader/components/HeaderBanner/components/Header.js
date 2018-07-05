import styled from "styled-components";

import {
  FONT_SIZE_TITLE,
  FONT_GROUP_MAIN_TEXT,
  FONT_WEIGHT_BASE
} from "style/styleVariables";
import { spacingScale } from "style/styleFunctions";

const Header = styled.h1`
  display: inline-block;
  font-size: ${FONT_SIZE_TITLE};
  font-family: ${FONT_GROUP_MAIN_TEXT};
  font-weight: ${FONT_WEIGHT_BASE};
  line-height: 1.2;
  margin: ${spacingScale(1)} 0;
  max-width: 100%;
  position: relative;
  text-transform: capitalize;
  z-index: 1;
  &::before {
    background-color: rgba(0, 0, 0, 1);
    content: "";
    display: block;
    filter: blur(12px);
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 108%;
    z-index: -1;
  }
`;

export default Header;
