import styled from "styled-components";
import { keen } from "style/theme";

const InputLabelText = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.FONT_SIZE_TEXT_SM};
  line-height: ${({ theme }) => theme.LINE_HEIGHT_TIGHT};
`;

InputLabelText.defaultProps = {
  theme: keen
};

export default InputLabelText;
