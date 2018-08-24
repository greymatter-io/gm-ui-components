import styled from "styled-components";

import {
  FONT_SIZE_HERO,
  COLOR_INTENT_WARNING,
  COLOR_CONTENT,
  BORDER_RADIUS_BASE
} from "style/styleVariables";
import { spacingScale } from "style/styleFunctions";

const ErrorContent = styled.div`
  align-items: center;
  border: 1px solid ${COLOR_INTENT_WARNING};
  border-radius: ${parseInt(BORDER_RADIUS_BASE, 10) * 2}px;
  color: ${COLOR_CONTENT};
  display: inline-flex;
  flex-basis: 600px;
  flex-flow: row nowrap;
  font-size: ${FONT_SIZE_HERO};
  justify-content: center;
  margin: ${spacingScale(4)};
  padding: ${spacingScale(8)} ${spacingScale(4)};
  padding-top: ${spacingScale(8)};
  padding-bottom: ${spacingScale(8)};
`;

export default ErrorContent;
