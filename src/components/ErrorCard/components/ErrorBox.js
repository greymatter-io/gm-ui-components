import styled from "styled-components";

import { keen } from "style/styleVariables";
import { spacingScale } from "style/styleFunctions";

const ErrorBox = styled.div`
  flex: 0.5 0 12em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-content: center;
  align-items: center;
  margin: ${spacingScale(4)};
  padding: ${spacingScale(6)} ${spacingScale(4)};
  border-radius: ${props => props.theme.RADIUS_4};
  border: 1px solid ${props => props.theme.COLOR_KEYLINE};
  font-family: ${props => props.theme.FONT_STACK_BASE};
  color: ${props => props.theme.COLOR_CONTENT};
`;

ErrorBox.defaultProps = {
  theme: keen
};

export default ErrorBox;
