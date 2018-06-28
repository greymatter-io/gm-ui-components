import styled from "styled-components";

import { FONT_SIZE_HERO } from "style/styleVariables";

const ReadoutItemValue = styled.span`
  font-size: ${FONT_SIZE_HERO};
  word-break: break-all;
  margin: 0;
  line-height: 1.2;
  min-height: 1em;
`;

export default ReadoutItemValue;
