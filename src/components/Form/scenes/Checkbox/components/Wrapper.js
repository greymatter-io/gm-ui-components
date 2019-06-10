import styled from "styled-components";
import { spacingScale } from "style/styleFunctions";
import { keen } from "style/theme";

const Wrapper = styled.label`
  ${props => getPosition(props.labelPosition)};
  font-family: ${props => props.theme.FONT_STACK_DEFAULT};
  font-size: ${props => props.theme.FONT_SIZE_TEXT_DEFAULT};
  color: ${props => props.theme.COLOR_CONTENT_DEFAULT};
  display: flex;
  width: fit-content;
  align-items: center;
`;

Wrapper.defaultProps = {
  theme: keen
};

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
