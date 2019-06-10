import styled from "styled-components";
import { keen } from "style/theme";

export const LoadingMessage = styled.p`
  opacity: ${props => props.theme.OPACITY_LIGHT};
  font-size: ${props => props.theme.FONT_SIZE_TEXT_XS};
  max-width: 50%;
  margin: 0;
`;

LoadingMessage.defaultProps = {
  theme: keen
};

export default LoadingMessage;
