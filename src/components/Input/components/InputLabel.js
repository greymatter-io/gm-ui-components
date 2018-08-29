import styled from "styled-components";
import { FONT_SIZE_BASE } from "style/styleVariables";
import { spacingScale } from "style/styleFunctions";

const InputLabel = styled.p`
  margin: ${spacingScale(0.5)} 0;
  font-size: ${FONT_SIZE_BASE};
`;

export default InputLabel;
