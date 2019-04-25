import styled from "styled-components";
import { keen } from "style/styleVariables";

const SectionTitle = styled.h3`
  color: inherit;
  font-size: ${props => props.theme.FONT_SIZE_BASE};
  font-weight: ${props => props.theme.FONT_WEIGHT_SEMIBOLD};
  margin: 0;
`;

SectionTitle.defaultProps = {
  theme: keen
};

export default SectionTitle;
