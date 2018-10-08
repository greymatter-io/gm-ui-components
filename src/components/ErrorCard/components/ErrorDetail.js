import styled from "styled-components";
import { FONT_SIZE_BASE, FONT_STACK_BASE } from "style/styleVariables";
import { spacingScale } from "style/styleFunctions";

const ErrorDetail = styled.p`
  align-items: center;
  cursor: default;
  display: flex;
  flex: 1;
  height: auto;
  justify-content: center;
  user-select: none;
  font-family: ${FONT_STACK_BASE};
  font-size: ${FONT_SIZE_BASE};
  margin: ${spacingScale(1)} 0;
`;

export default ErrorDetail;
