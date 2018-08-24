import styled from "styled-components";

import { readableColor, transparentize } from 'polished';

import { spacingScale } from "style/styleFunctions";
import { FONT_SIZE_BASE, COLOR_BACKGROUND_C } from "style/styleVariables";

const APP_TOOLBAR_HEIGHT = spacingScale(4);
const APP_TOOLBAR_FONT_SIZE = FONT_SIZE_BASE;
const APP_TOOLBAR_BACKGROUND_COLOR = "transparent";
const APP_TOOLBAR_TEXT_COLOR = readableColor(COLOR_BACKGROUND_C);

const HeaderToolbarWrapper = styled.nav`
  background-color: ${APP_TOOLBAR_BACKGROUND_COLOR};
  color: ${APP_TOOLBAR_TEXT_COLOR};
  flex: 0 0 ${APP_TOOLBAR_HEIGHT};
  font-size: ${APP_TOOLBAR_FONT_SIZE};
  background-image: linear-gradient(to top, ${transparentize(1, COLOR_BACKGROUND_C)}, ${COLOR_BACKGROUND_C});
  padding: 0 ${spacingScale(2)};
  align-items: center;
  display: flex;
  flex-wrap: nowrap;
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;

export default HeaderToolbarWrapper;
