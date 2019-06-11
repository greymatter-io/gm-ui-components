import styled from "styled-components";
import { spacingScale } from "style/styleFunctions";
import { keen } from "style/theme";

const ButtonLabelSuffix = styled.span`
  color: ${props => props.theme.COLOR_CONTENT_MUTED};
  margin-left: ${spacingScale(1)};
`;

ButtonLabelSuffix.defaultProps = {
  theme: keen
};

export default ButtonLabelSuffix;
