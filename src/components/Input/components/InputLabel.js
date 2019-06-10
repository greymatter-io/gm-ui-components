import styled from "styled-components";
import { spacingScale } from "style/styleFunctions";
import { keen } from "style/theme";

const InputLabel = styled.p`
  margin: ${spacingScale(0.5)} 0;
  font-size: ${props => props.theme.FONT_SIZE_TEXT_DEFAULT};
  color: ${props => props.theme.COLOR_CONTENT_DEFAULT};
`;

InputLabel.defaultProps = {
  theme: keen
};

export default InputLabel;
