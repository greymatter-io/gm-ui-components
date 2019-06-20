import styled from "styled-components";

import { spacingScale } from "style/styleFunctions";
import { keen } from "style/theme";

export const InputHint = styled.small`
  margin: ${spacingScale(0.5)} 0;
  font-size: ${({theme}) => theme.FONT_SIZE_TEXT_XS};
  color: ${({theme}) => theme.COLOR_CONTENT_MUTED};
  display: block;
`;

InputHint.defaultProps = {
  theme: keen
};

export default InputHint;
