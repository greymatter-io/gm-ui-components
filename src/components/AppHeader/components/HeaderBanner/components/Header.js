import styled from "styled-components";

import { spacingScale } from "style/styleFunctions";
import { keen } from "style/styleVariables";

const Header = styled.h1`
  font-size: ${props => props.theme.FONT_SIZE_TITLE};
  font-family: ${props => props.theme.FONT_STACK_BRAND};
  font-weight: ${props => props.theme.FONT_WEIGHT_BASE};
  margin: 0;
  display: inline-block;
  line-height: 1.2;
  max-width: 100%;
  position: relative;
  text-transform: capitalize;
  z-index: 1;

  &::before {
    background-color: #000;
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

Header.defaultProps = {
  theme: keen
};

export default Header;
