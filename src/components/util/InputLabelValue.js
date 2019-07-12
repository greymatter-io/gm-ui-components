import styled from "styled-components";
import { keen } from "style/theme";

const InputLabelValue = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.FONT_SIZE_TEXT_DEFAULT};
  line-height: ${({ theme }) => theme.LINE_HEIGHT_TIGHT};
  color: ${({ theme }) => theme.COLOR_CONTENT_DEFAULT};
`;

InputLabelValue.defaultProps = {
  theme: keen
};

export default InputLabelValue;
