import styled from "styled-components";

import {
  COLOR_BLACK,
  COLOR_WHITE,
  FONT_STACK_BASE
} from "style/styleVariables";
import BannerBackgroundImage from "./images/mesh-web.jpg";

const HeaderWrapper = styled.div`
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  font-family: ${FONT_STACK_BASE};
  color: ${COLOR_WHITE};
  align-items: stretch;
  background-color: ${COLOR_BLACK};
  background-image: linear-gradient(
      to right,
      #000,
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0)
    ),
    url(${BannerBackgroundImage});
  background-size: 100% 100%, 120% auto;
  background-position: center center, left center;
  background-repeat: no-repeat;
  overflow: hidden;
`;

export default HeaderWrapper;
