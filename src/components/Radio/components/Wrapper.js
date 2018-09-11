import styled from "styled-components";
import { FONT_STACK_BASE, FONT_SIZE_BASE } from "style/styleVariables";
import { spacingScale } from "style/styleFunctions";

const Wrapper = styled.label`
  ${props => getPosition(props.labelPosition)};
  font-family: ${FONT_STACK_BASE};
  font-size: ${FONT_SIZE_BASE};
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
