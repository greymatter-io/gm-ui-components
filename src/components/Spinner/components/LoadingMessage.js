import styled from "styled-components";
import { keen } from "style/theme";

export const LoadingMessage = styled.p`
  color: ${({theme}) => theme.COLOR_CONTENT_MUTED};
  font-size: ${({theme}) => theme.FONT_SIZE_TEXT_XS};
  max-width: 50%;
  margin: 0;
`;

LoadingMessage.defaultProps = {
  theme: keen
};

export default LoadingMessage;
