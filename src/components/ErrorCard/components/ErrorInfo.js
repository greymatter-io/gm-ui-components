import styled from "styled-components";
import { keen } from "style/styleVariables";

const ErrorMessage = styled.div`
  opacity: ${props => props.theme.OPACITY_70};
  font-size: ${props => props.theme.FONT_SIZE_XS};
  max-width: 50%;
  margin: 0;
`;

ErrorMessage.defaultProps = {
  theme: keen
};

export default ErrorMessage;
