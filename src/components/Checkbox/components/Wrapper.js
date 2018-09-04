import styled from "styled-components";
import { COLOR_CONTENT, FONT_STACK_BASE, FONT_SIZE_BASE } from "style/styleVariables";
import { spacingScale } from "style/styleFunctions";

const fontFamily = props => props.theme.FONT_STACK_BASE || FONT_STACK_BASE;
const fontSize = props => props.theme.FONT_SIZE_BASE || FONT_SIZE_BASE;
const color = props => props.theme.COLOR_CONTENT || COLOR_CONTENT;

const Wrapper = styled.label`
  ${props => getPosition(props.labelPosition)};
  font-family: ${fontFamily};
  font-size: ${fontSize};
  color: ${color};
  display: flex;
  width: fit-content;
  align-items: center;
`;

const CONTROL_SPACING = spacingScale(1);

function getPosition(position) {
  switch (position) {
    case "top":
      return `
        flex-direction: column-reverse;

        > input {
          margin-top: ${CONTROL_SPACING};
        }
      `;
    case "bottom":
      return `
        flex-direction: column;

        > input {
          margin-bottom: ${CONTROL_SPACING};
        }
      `;
    case "left":
      return `
        flex-direction: row-reverse;

        > input {
          margin-left: ${CONTROL_SPACING};
        }
      `;
    case "right":
      return `
        flex-direction: row;

        > input {
          margin-right: ${CONTROL_SPACING};
        }
      `;
    default:
      return `
       flex-direction: row-reverse;

        > input {
          margin-left: ${CONTROL_SPACING};
        }
      `;
  }
}

export default Wrapper;
