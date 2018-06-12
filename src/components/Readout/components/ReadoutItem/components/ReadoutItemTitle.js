import styled from "styled-components";

import { FONT_SIZE_BASE, FONT_WEIGHT_SEMIBOLD } from "style/styleVariables";

const ReadoutItemTitle = styled.h2`
  font-size: ${FONT_SIZE_BASE};
  margin: 0;
  padding: 0;
  font-weight: ${FONT_WEIGHT_SEMIBOLD};
  min-height: 1em;
  display: inline-block;
`;

export default ReadoutItemTitle;
