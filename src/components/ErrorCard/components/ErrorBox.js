import styled from "styled-components";
import {
  FONT_STACK_BASE,
  COLOR_CONTENT,
  COLOR_KEYLINE,
  RADIUS_4
} from "style/styleVariables";
import { spacingScale } from "style/styleFunctions";

const ErrorBox = styled.div`
  flex: 0.5 0 12em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-content: center;
  align-items: center;
  margin: ${spacingScale(4)};
  padding: ${spacingScale(6)} ${spacingScale(4)};
  border-radius: ${RADIUS_4};
  border: 1px solid ${COLOR_KEYLINE};
  font-family: ${FONT_STACK_BASE};
  color: ${COLOR_CONTENT};
`;

export default ErrorBox;
