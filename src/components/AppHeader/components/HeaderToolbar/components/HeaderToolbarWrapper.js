import styled, { css } from "styled-components";

import { readableColor, transparentize } from "polished";

import { spacingScale } from "style/styleFunctions";

const APP_TOOLBAR_HEIGHT = spacingScale(4);
const APP_TOOLBAR_FONT_SIZE = props => props.theme.FONT_SIZE_BASE;
const APP_TOOLBAR_BACKGROUND_COLOR = "transparent";
const APP_TOOLBAR_TEXT_COLOR = props =>
  readableColor(props.theme.COLOR_BACKGROUND_C);

const backgroundImage = css`
  background-image: linear-gradient(
    to top,
    ${props => transparentize(1, props.theme.COLOR_BACKGROUND_C)},
    ${props => props.theme.COLOR_BACKGROUND_C}
  );
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

export default HeaderToolbarWrapper;
