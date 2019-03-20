import styled from "styled-components";
import { spacingScale } from "style/styleFunctions";
import { keen } from "style/styleVariables";

const ButtonLabelSuffix = styled.span`
  opacity: ${props => props.theme.OPACITY_50};
  margin-left: ${spacingScale(1)};
`;

ButtonLabelSuffix.defaultProps = {
  theme: keen
};

export default ButtonLabelSuffix;
