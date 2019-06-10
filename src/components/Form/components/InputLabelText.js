import styled from "styled-components";
import { keen } from "style/theme";

const InputLabelText = styled.p`
  margin: 0;
  font-size: ${props => props.theme.FONT_SIZE_TEXT_DEFAULT};
`;

InputLabelText.defaultProps = {
  theme: keen
};

export default InputLabelText;
