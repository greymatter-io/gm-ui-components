import styled from "styled-components";
import { transparentize } from "polished";

import BannerBackgroundImage from "./images/mesh-web.jpg";
import { keen } from "style/theme";

const HeaderWrapper = styled.div`
  font-family: ${props => props.theme.FONT_STACK_DEFAULT};
  color: #fff;
  background-color: #000;
  background-image: linear-gradient(
      to right,
      #000,
      ${transparentize(0.7, "#000")},
      ${transparentize(1, "#000")}
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

HeaderWrapper.defaultProps = {
  theme: keen
};

export default HeaderWrapper;
