import styled from "styled-components";
import { spacingScale } from "style/styleFunctions";
import { keen } from "style/theme";

const ButtonLabelSuffix = styled.span`
  opacity: ${props => props.theme.OPACITY_LIGHTER};
  margin-left: ${spacingScale(1)};
`;

ButtonLabelSuffix.defaultProps = {
  theme: keen
};

export default ButtonLabelSuffix;
