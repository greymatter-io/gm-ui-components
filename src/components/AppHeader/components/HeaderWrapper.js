import styled from "styled-components";
import { readableColor, transparentize } from 'polished';

import {
  FONT_STACK_BASE,
  COLOR_BACKGROUND_C
} from "style/styleVariables";
import BannerBackgroundImage from "./images/mesh-web.jpg";

const HeaderWrapper = styled.div`
  font-family: ${FONT_STACK_BASE};
  color: ${readableColor(COLOR_BACKGROUND_C)};
  background-color: ${COLOR_BACKGROUND_C};
  background-image:
    linear-gradient(
      to right,
      ${COLOR_BACKGROUND_C},
      ${transparentize(0.7, COLOR_BACKGROUND_C)},
      ${transparentize(1, COLOR_BACKGROUND_C)}
    ),
    url(${BannerBackgroundImage});
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  align-items: stretch;
  background-size: 100% 100%, 120% auto;
  background-position: center center, left center;
  background-repeat: no-repeat;
  overflow: hidden;
`;

export default HeaderWrapper;
