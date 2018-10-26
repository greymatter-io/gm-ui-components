import styled from "styled-components";

const ReadoutItemTitle = styled.h2`
  font-size: ${props => props.theme.FONT_SIZE_BASE};
  margin: 0;
  padding: 0;
  font-weight: ${props => props.theme.FONT_WEIGHT_SEMIBOLD};
  min-height: 1em;
  display: inline-block;
`;

export default ReadoutItemTitle;
