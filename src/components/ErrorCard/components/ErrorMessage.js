import styled from "styled-components";
import { keen } from "style/styleVariables";

const ErrorMessage = styled.p`
  font-size: ${props => props.theme.FONT_SIZE_BASE};
  font-weight: ${props => props.theme.FONT_WEIGHT_DEMI};
  margin: 0;
`;

ErrorMessage.defaultProps = {
  theme: keen
};

ErrorMessage.displayName = "ErrorMessage";

export default ErrorMessage;
