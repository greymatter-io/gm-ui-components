import styled from "styled-components";

export const Message = styled.span`
  grid-area: message;
  line-height: ${({ theme }) => theme.LINE_HEIGHT_TIGHT};
  margin: auto 0 0;
  display: block;

  &:last-of-type {
    margin: auto 0;
  }
`;
