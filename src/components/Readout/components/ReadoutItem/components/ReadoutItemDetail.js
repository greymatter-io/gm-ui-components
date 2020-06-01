import styled from "styled-components";
import { keen } from "style/theme";

const ReadoutItemDetail = styled.p`
  font-size: ${({ theme }) => theme.FONT_SIZE_TEXT_DEFAULT};
  margin: 0;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT_SEMIBOLD};
  min-height: 1em;
`;

ReadoutItemDetail.defaultProps = {
  theme: keen
};

export default ReadoutItemDetail;
