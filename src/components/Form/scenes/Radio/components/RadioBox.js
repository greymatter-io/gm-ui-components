import styled from "styled-components";
import { transparentize, readableColor, darken } from "polished";

import { keen } from "style/theme";

import InputBox from "components/Form/components/InputBox";

const CheckmarkColor = props =>
  readableColor(darken(0.1, props.theme.COLOR_INTENT_HIGHLIGHT));

const RadioBox = styled(InputBox).attrs({
  type: "radio"
})`
  border-radius: 200px;

  &:after {
    position: static;
    width: 0;
    height: 0;
    border-radius: 200px;
    box-sizing: border-box;
    transform: scale(0);
    transition: all 0.3s ease;
  }

  &:checked {
    &:enabled {
      background: ${props => props.theme.COLOR_INTENT_HIGHLIGHT};
    }

    &:after {
      background-color: ${CheckmarkColor};
      width: 50%;
      height: 50%;
      transform: scale(1);
    }
  }

  *:hover > & {
    background: ${props =>
      transparentize(
        1 - props.theme.OPACITY_15,
        props.theme.COLOR_INTENT_HIGHLIGHT
      )};

    &:checked {
      background: ${props =>
        transparentize(
          1 - props.theme.OPACITY_70,
          props.theme.COLOR_INTENT_HIGHLIGHT
        )};
      border-color: transparent;
    }

    *:active > & {
      background: ${props =>
        transparentize(
          1 - props.theme.OPACITY_50,
          props.theme.COLOR_INTENT_HIGHLIGHT
        )};

      &:checked {
        background: ${props =>
          transparentize(
            1 - props.theme.OPACITY_50,
            props.theme.COLOR_INTENT_HIGHLIGHT
          )};
        border-color: transparent;
      }
    }
  }
`;

RadioBox.defaultProps = {
  theme: keen
};

export default RadioBox;
