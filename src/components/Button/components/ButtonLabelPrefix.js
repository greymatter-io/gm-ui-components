import styled from "styled-components";
import { spacingScale } from "style/styleFunctions";
import { keen } from "style/theme";

const ButtonLabelPrefix = styled.span`
  opacity: ${props => props.theme.OPACITY_LIGHTER};
  margin-right: ${spacingScale(1)};
`;

ButtonLabelPrefix.defaultProps = {
  theme: keen
};

export default ButtonLabelPrefix;
