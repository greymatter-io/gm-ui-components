import styled from "styled-components";
import { keen } from "style/styleVariables";
import { spacingScale } from "style/styleFunctions";

const ErrorMessage = styled.p`
  align-items: center;
  cursor: default;
  display: flex;
  flex: 1;
  height: auto;
  justify-content: center;
  user-select: none;
  font-family: ${props => props.theme.FONT_STACK_BASE};
  font-size: ${props => props.theme.FONT_SIZE_TITLE};
  margin: ${spacingScale(2)} 0 0;
`;

ErrorMessage.defaultProps = {
  theme: keen
};

export default ErrorMessage;
