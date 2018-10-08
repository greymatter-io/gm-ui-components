import styled from "styled-components";
import { FONT_STACK_BASE, FONT_SIZE_TITLE } from "style/styleVariables";
import { spacingScale } from "style/styleFunctions";

const ErrorMessage = styled.p`
  align-items: center;
  cursor: default;
  display: flex;
  flex: 1;
  height: auto;
  justify-content: center;
  user-select: none;
  font-family: ${FONT_STACK_BASE};
  font-size: ${FONT_SIZE_TITLE};
  margin: ${spacingScale(2)} 0 0;
`;

export default ErrorMessage;
