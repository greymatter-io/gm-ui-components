import styled from "styled-components";

import { keen } from "style/styleVariables";

const ErrorBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${props => props.theme.FONT_STACK_BASE};
  color: ${props => props.theme.COLOR_CONTENT};
  margin: auto;
  flex: 0 0 auto;

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
