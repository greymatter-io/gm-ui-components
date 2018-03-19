import styled from "styled-components";
import { transparentize } from 'polished';

import { contrastColor, spacingScale } from "../../../style/styleFunctions";
import {
  COLOR_CONTENT_BACKGROUND,
  FONT_SIZE_BASE,
  APP_FOOTER_HEIGHT,
  ZINDEX_STICKY
} from "../../../style/styleVariables";

const Footer = styled.footer`
  user-select: none;
  overflow: hidden;
  padding: ${spacingScale(0.5)};
  display: flex;
  flex-flow: row wrap;
  color: ${contrastColor(COLOR_CONTENT_BACKGROUND, 0.8)};
  background-image: linear-gradient(
    to bottom,
    ${transparentize(1, COLOR_CONTENT_BACKGROUND)},
    ${COLOR_CONTENT_BACKGROUND}
  );
  font-size: ${FONT_SIZE_BASE};
  height: auto;
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
