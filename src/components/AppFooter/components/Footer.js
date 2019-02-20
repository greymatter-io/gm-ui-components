import styled from "styled-components";

import { spacingScale } from "style/styleFunctions";
import {
  FONT_SIZE_BASE,
  ZINDEX_STICKY,
  COLOR_CONTENT,
  FONT_STACK_BASE,
  COLOR_BACKGROUND_A
} from "style/styleVariables";

const APP_FOOTER_HEIGHT = spacingScale(5);

const Footer = styled.footer`
  user-select: none;
  overflow: hidden;
  padding: 0 ${spacingScale(0.5)};
  font-family: ${FONT_STACK_BASE};
  display: flex;
  flex-flow: row wrap;
  color: ${COLOR_CONTENT};
  background: ${COLOR_BACKGROUND_A};
  font-size: ${FONT_SIZE_BASE};
  height: auto;
  min-height: ${spacingScale(4)};
  align-items: stretch;
  justify-content: stretch;

  @media all and (min-width: 800px) {
    height: ${APP_FOOTER_HEIGHT};
    flex-wrap: no-wrap;
    align-items: center;
    justify-content: flex-start;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: ${ZINDEX_STICKY};

    & + * {
      padding-bottom: ${spacingScale(4)};
    }
  }
`;

export default Footer;
