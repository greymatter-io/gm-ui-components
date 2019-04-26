import styled from "styled-components";
import { keen } from "style/styleVariables";

const ErrorDetail = styled.p`
  font-family: ${props => props.theme.FONT_STACK_BASE};
  font-size: ${props => props.theme.FONT_SIZE_SM};
  opacity: ${props => props.theme.OPACITY_70};
  margin: 0;
`;

ErrorDetail.defaultProps = {
  theme: keen
};

ErrorDetail.displayName = "ErrorDetail";

export default ErrorDetail;
