import styled from "styled-components";
import { FONT_STACK_DEFAULT, FONT_SIZE_TEXT_DEFAULT } from "style/theme";
import { spacingScale } from "style/styleFunctions";

const Wrapper = styled.label`
  ${props => getPosition(props.labelPosition)};
  font-family: ${({ theme }) => theme.FONT_STACK_DEFAULT};
  font-size: ${({ theme }) => theme.FONT_SIZE_TEXT_DEFAULT};
  color: ${({ theme }) => theme.COLOR_CONTENT_DEFAULT};
  display: flex;
  width: fit-content;
  align-items: center;
`;

const CONTROL_SPACING = spacingScale(1);

function getPosition(position) {
  switch (position) {
    case "top":
      return css`
        flex-direction: column-reverse;

        > input {
          margin-top: ${CONTROL_SPACING};
        }
      `;
    case "bottom":
      return css`
        flex-direction: column;

        > input {
          margin-bottom: ${CONTROL_SPACING};
        }
      `;
    case "left":
      return css`
        flex-direction: row-reverse;

        > input {
          margin-left: ${CONTROL_SPACING};
        }
      `;
    case "right":
      return css`
        flex-direction: row;

        > input {
          margin-right: ${CONTROL_SPACING};
        }
      `;
    default:
      return css`
        flex-direction: row-reverse;

        > input {
          margin-left: ${CONTROL_SPACING};
        }
      `;
  }
}

export default Wrapper;
