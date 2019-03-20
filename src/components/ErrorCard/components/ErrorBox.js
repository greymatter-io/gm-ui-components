import styled from "styled-components";
import { keen } from "style/styleVariables";

const ErrorBox = styled.div`
  align-items: center;
  cursor: default;
  display: flex;
  flex: 1;
  height: auto;
  justify-content: center;
  user-select: none;
  font-family: ${props => props.theme.FONT_STACK_BASE};
`;

ErrorBox.defaultProps = {
  theme: keen
};

export default ErrorBox;
