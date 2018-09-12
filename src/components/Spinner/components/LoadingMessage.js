import styled from "styled-components";

export const LoadingMessage = styled.p`
  opacity: ${props => props.theme.OPACITY_70};
  font-size: ${props => props.theme.FONT_SIZE_XS};
  max-width: 50%;
  margin: 0;
`;

export default LoadingMessage;
