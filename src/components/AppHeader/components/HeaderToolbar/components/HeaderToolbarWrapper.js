import styled from "styled-components";

import { contrastColor, spacingScale } from "style/styleFunctions";
import { FONT_SIZE_BASE, COLOR_BLACK } from "style/styleVariables";

const APP_TOOLBAR_HEIGHT = spacingScale(4.25);
const APP_TOOLBAR_FONT_SIZE = FONT_SIZE_BASE;
const APP_TOOLBAR_BACKGROUND_COLOR = "transparent";
const APP_TOOLBAR_TEXT_COLOR = contrastColor(COLOR_BLACK);

const HeaderToolbarWrapper = styled.nav`
  align-items: center;
  background-color: ${APP_TOOLBAR_BACKGROUND_COLOR};
  color: ${APP_TOOLBAR_TEXT_COLOR};
  display: flex;
  flex: 0 0 ${APP_TOOLBAR_HEIGHT};
  padding: 0 ${spacingScale(1)};
  flex-wrap: nowrap;
  font-size: ${APP_TOOLBAR_FONT_SIZE};
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;

export default HeaderToolbarWrapper;
