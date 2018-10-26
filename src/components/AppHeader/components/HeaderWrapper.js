import styled from "styled-components";
import { transparentize } from "polished";

import BannerBackgroundImage from "./images/mesh-web.jpg";

const HeaderWrapper = styled.div`
  font-family: ${props => props.theme.FONT_STACK_BASE};
  color: ${props => props.theme.COLOR_CONTENT};
  background-color: ${props => props.theme.COLOR_BACKGROUND_C};
  background-image: linear-gradient(
      to right,
      ${props => props.theme.COLOR_BACKGROUND_C},
      ${props => transparentize(0.7, props.theme.COLOR_BACKGROUND_C)},
      ${props => transparentize(1, props.theme.COLOR_BACKGROUND_C)}
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
