import styled from "styled-components";
import { spacingScale } from "style/styleFunctions";

const ButtonLabelSuffix = styled.span`
  opacity: ${props => props.theme.OPACITY_50};
  margin-left: ${spacingScale(1)};
`;

export default ButtonLabelSuffix;
