import styled from "styled-components";

import { keen } from "style/theme";

export const InputHint = styled.small`
  margin: 0.5rem 0;
  font-size: ${({ theme }) => theme.FONT_SIZE_TEXT_XS};
  color: ${({ theme }) => theme.COLOR_CONTENT_MUTED};
  display: block;
`;

InputHint.defaultProps = {
  theme: keen
};

export default InputHint;
