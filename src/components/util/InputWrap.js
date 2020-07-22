import styled, { css } from "styled-components";
import { keen } from "style/theme";

const InputWrap = styled.label`
  ${props => getPosition(props.labelPosition)};
  color: ${({ theme }) => theme.COLOR_CONTENT_DEFAULT};
  font-family: ${({ theme }) => theme.FONT_STACK_DEFAULT};
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
      return css`
        flex-direction: row;
        align-items: center;
        > input,
        > textarea,
        > select {
          margin-left: 0.5rem;
        }
      `;
    case "right":
      return css`
        flex-direction: row-reverse;
        justify-content: flex-end;
        align-items: center;
        > input,
        > textarea,
        > select {
          margin-right: 0.5rem;
        }
      `;
    case "bottom":
      return css`
        flex-direction: column-reverse;
        > input,
        > textarea,
        > select {
          margin-bottom: 0.5rem;
        }
      `;
    default:
    case "top":
      return css`
        flex-direction: column;
        > input,
        > textarea,
        > select {
          margin-top: 0.5rem;
        }
      `;
  }
}

export default InputWrap;
