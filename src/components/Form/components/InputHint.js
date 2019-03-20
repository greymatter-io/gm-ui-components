import styled from "styled-components";

import { spacingScale } from "style/styleFunctions";
import { keen } from "style/styleVariables";

export const InputHint = styled.small`
  margin: ${spacingScale(0.5)} 0;
  font-size: ${props => props.theme.FONT_SIZE_XS};
  color: ${props => props.theme.COLOR_CONTENT};
  opacity: ${props => props.theme.OPACITY_50};
  display: block;
`;

InputHint.defaultProps = {
  theme: keen
};

export default InputHint;
