import styled from "styled-components";

import { FONT_SIZE_XS } from "style/styleVariables";
import { spacingScale } from "style/styleFunctions";

export const InputHint = styled.small`
  margin: ${spacingScale(0.5)} 0;
  font-size: ${FONT_SIZE_XS};
  opacity: 0.5;
  display: block;
`;

export default InputHint;
