import styled from "styled-components";
import { keen } from "style/styleVariables";

export const LoadingMessage = styled.p`
  opacity: ${props => props.theme.OPACITY_70};
  font-size: ${props => props.theme.FONT_SIZE_XS};
  max-width: 50%;
  margin: 0;
`;

LoadingMessage.defaultProps = {
  theme: keen
};

export default LoadingMessage;
