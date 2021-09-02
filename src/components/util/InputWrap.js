import styled, { css } from "styled-components";
import { keen } from "style/theme";
import { spacingScale } from "style/styleFunctions";

const InputWrap = styled.label`
  color: ${({ theme }) => theme.COLOR_CONTENT_DEFAULT};
  font-family: ${({ theme }) => theme.FONT_STACK_DEFAULT};
  display: grid;
  position: relative;
  grid-template-columns: 4fr auto auto auto;
  grid-template-rows: auto auto auto;
  grid-template-areas:
    "label label label label"
    "input button . ."
    "small small small small";

  p {
    grid-area: label;
  }

  input,
  textarea,
  select {
    grid-area: input;
  }

  button {
    grid-area: button;
    justify-self: start;
    align-self: center;
  }

  small {
    grid-area: small;
  }
  ${props => getPosition(props.labelPosition)};

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
        grid-template-areas: "label input button small";
        > button {
          grid-column: 2 / 3;
          right: 5px;
        }
        > input,
        > textarea,
        > select {
          margin: 0 ${spacingScale(0.5)};
        }
      `;
    case "right":
      return css`
        grid-template-areas: "small input button label";
        > button {
          grid-column: 3 / 4;
          right: 8px;
        }
        > input,
        > textarea,
        > select {
          margin: 0 ${spacingScale(0.5)};
        }
      `;
    case "bottom":
      return css`
        grid-template-areas:
          "small small small small"
          "input . . button"
          "label label label label";
        > button {
          grid-column: 1 / 2;
          right: 3px;
          bottom: 9px;
        }
        > input,
        > textarea,
        > select {
          margin-bottom: ${spacingScale(0.5)};
        }
      `;
    default:
    case "top":
      return css`
        > button {
          grid-column: 1 / 2;
          right: 3px;
          bottom: 5px;
        }
        > input,
        > textarea,
        > select {
          margin-top: ${spacingScale(0.5)};
        }
      `;
  }
}

export default InputWrap;
