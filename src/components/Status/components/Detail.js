import styled from "styled-components";

export const Detail = styled.span`
  display: block;
  grid-area: detail;
  color: ${({ theme }) => theme.COLOR_CONTENT_MUTED};
  font-size: ${({ theme }) => theme.FONT_SIZE_TEXT_XS};
  margin: -1px 0 auto;
`;
