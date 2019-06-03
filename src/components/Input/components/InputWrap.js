import styled from "styled-components";
import { keen } from "style/theme";

const InputWrap = styled.label`
  font-family: ${props => props.theme.FONT_STACK_BASE};
  position: relative;
`;

InputWrap.defaultProps = {
  theme: keen
};

export default InputWrap;
