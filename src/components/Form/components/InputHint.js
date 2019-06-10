import styled from "styled-components";

import { spacingScale } from "style/styleFunctions";
import { keen } from "style/theme";

export const InputHint = styled.small`
  margin: ${spacingScale(0.5)} 0;
  font-size: ${props => props.theme.FONT_SIZE_TEXT_XS};
  color: ${props => props.theme.COLOR_CONTENT_DEFAULT};
  opacity: ${props => props.theme.OPACITY_LIGHTER};
  display: block;
`;

InputHint.defaultProps = {
  theme: keen
};

export default InputHint;
