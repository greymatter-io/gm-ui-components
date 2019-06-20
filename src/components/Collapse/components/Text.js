import styled from "styled-components";

import { keen } from "style/theme";

export const Title = styled.div`
  margin-right: auto;
`;

export const Detail = styled.div`
  font-size: ${({ theme }) => theme.FONT_SIZE_XS};
`;

Detail.defaultProps = {
  theme: keen
};
