import styled from "styled-components";
import { FONT_STACK_BASE } from "style/styleVariables";

const ErrorBox = styled.div`
  align-items: center;
  cursor: default;
  display: flex;
  flex: 1;
  height: auto;
  justify-content: center;
  user-select: none;
  font-family: ${FONT_STACK_BASE};
`;

export default ErrorBox;
