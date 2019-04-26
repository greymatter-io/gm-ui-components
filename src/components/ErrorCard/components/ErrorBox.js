import styled from "styled-components";
import { spacingScale } from "style/styleFunctions";

import { keen } from "style/styleVariables";

const ErrorBox = styled.div`
  font-family: ${props => props.theme.FONT_STACK_BASE};
  color: ${props => props.theme.COLOR_CONTENT};
  padding: ${spacingScale(1)};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;

  ${props =>
    props.orientation === "vertical"
      ? `
    text-align: center;
    flex-direction: column;
  `
      : `
    text-align: left;
    flex-direction: row;
  `};
`;

ErrorBox.defaultProps = {
  theme: keen
};

export default ErrorBox;
