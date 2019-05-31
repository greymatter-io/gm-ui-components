import styled from "styled-components";
import { keen } from "style/styleVariables";
import { spacingScale } from "style/styleFunctions";

const InputWrap = styled.label`
  ${props => getPosition(props.labelPosition)};
  color: ${props => props.theme.COLOR_CONTENT};
  font-family: ${props => props.theme.FONT_STACK_BASE};
  display: flex;
  position: relative;

  &:active {
    /* Prevent text selection when user clicks label to focus input.
    User can drag to select from outside the label to select label text. */
    user-select: none;
  }
`;

InputWrap.defaultProps = {
  theme: keen
};

function getPosition(position) {
  switch (position) {
    case "left":
      return `
        flex-direction: row;
        > input,
        > textarea,
        > select {
          margin-left: ${spacingScale(0.5)};
        }
      `;
    case "right":
      return `
        flex-direction: row-reverse;
        > input,
        > textarea,
        > select {
          margin-right: ${spacingScale(0.5)};
        }
      `;
    case "bottom":
      return `
        flex-direction: column-reverse;
        > input,
        > textarea,
        > select {
          margin-bottom: ${spacingScale(0.5)};
        }
      `;
    default:
    case "top":
      return `
        flex-direction: column;
        > input,
        > textarea,
        > select {
          margin-top: ${spacingScale(0.5)};
        }
      `;
  }
}

export default InputWrap;
