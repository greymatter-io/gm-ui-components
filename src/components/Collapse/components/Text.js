import styled from "styled-components";

import { keen } from "style/styleVariables";

export const Title = styled.div`
  margin-right: auto;
`;

export const Detail = styled.div`
  font-size: ${({ theme }) => theme.FONT_SIZE_XS};
  text-transform: uppercase;
`;

Detail.defaultProps = {
  theme: keen
};
