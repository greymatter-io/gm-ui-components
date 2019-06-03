import styled from "styled-components";
import { spacingScale } from "style/styleFunctions";
import { keen } from "style/theme";

const InputLabel = styled.p`
  margin: ${spacingScale(0.5)} 0;
  font-size: ${props => props.theme.FONT_SIZE_BASE};
  color: ${props => props.theme.COLOR_CONTENT};
`;

InputLabel.defaultProps = {
  theme: keen
};

export default InputLabel;
