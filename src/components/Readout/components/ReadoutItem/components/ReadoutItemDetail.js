import styled from "styled-components";
import { keen } from "style/theme";

const ReadoutItemDetail = styled.p`
  font-size: ${props => props.theme.FONT_SIZE_BASE};
  margin: 0;
  font-weight: ${props => props.theme.FONT_WEIGHT_SEMIBOLD};
  min-height: 1em;
`;

ReadoutItemDetail.defaultProps = {
  theme: keen
};

export default ReadoutItemDetail;
