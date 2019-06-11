import styled from "styled-components";
import { spacingScale } from "style/styleFunctions";
import { keen } from "style/theme";

const ButtonLabelPrefix = styled.span`
  color: ${props => props.theme.COLOR_CONTENT_MUTED};
  margin-right: ${spacingScale(1)};
`;

ButtonLabelPrefix.defaultProps = {
  theme: keen
};

export default ButtonLabelPrefix;
