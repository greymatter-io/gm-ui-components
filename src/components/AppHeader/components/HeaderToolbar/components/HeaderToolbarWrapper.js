import styled, { css } from "styled-components";

import { spacingScale } from "style/styleFunctions";
import { keen } from "style/styleVariables";

const APP_TOOLBAR_HEIGHT = spacingScale(4);
const APP_TOOLBAR_FONT_SIZE = props => props.theme.FONT_SIZE_BASE;
const APP_TOOLBAR_BACKGROUND_COLOR = "transparent";
const APP_TOOLBAR_TEXT_COLOR = "#fff";

const backgroundImage = css`
  background-image: linear-gradient(to top, transparent, #000);
`;

const HeaderToolbarWrapper = styled.nav`
  ${backgroundImage};
  background-color: ${APP_TOOLBAR_BACKGROUND_COLOR};
  color: ${APP_TOOLBAR_TEXT_COLOR};
  flex: 0 0 ${APP_TOOLBAR_HEIGHT};
  font-size: ${APP_TOOLBAR_FONT_SIZE};
  padding: 0 ${spacingScale(2)};
  align-items: center;
  display: flex;
  flex-wrap: nowrap;
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;

HeaderToolbarWrapper.defaultProps = {
  theme: keen
};

export default HeaderToolbarWrapper;
