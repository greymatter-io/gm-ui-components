import styled from "styled-components";
import { spacingScale } from "style/styleFunctions";

const ButtonLabelPrefix = styled.span`
  opacity: ${props => props.theme.OPACITY_50};
  margin-right: ${spacingScale(1)};
`;

export default ButtonLabelPrefix;
