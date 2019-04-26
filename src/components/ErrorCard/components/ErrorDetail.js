import styled from "styled-components";
import { keen } from "style/styleVariables";

const ErrorDetail = styled.p`
  align-items: center;
  display: flex;
  flex: 1;
  height: auto;
  justify-content: center;
  font-family: ${props => props.theme.FONT_STACK_BASE};
  font-size: ${props => props.theme.FONT_SIZE_SM};
  margin: 0;
  opacity: ${props => props.theme.OPACITY_70};
`;

ErrorDetail.defaultProps = {
  theme: keen
};

ErrorDetail.displayName = "ErrorDetail";

export default ErrorDetail;
