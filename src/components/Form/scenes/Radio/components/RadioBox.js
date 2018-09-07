import styled from "styled-components";

import { COLOR_INTENT_HIGHLIGHT } from "style/styleVariables";

import InputBox from "components/Form/components/InputBox";

const RadioBox = styled(InputBox).attrs({
  type: "radio"
})`
  border-radius: 200px;

  &:after {
    width: 0;
    height: 0;
    border-radius: 200px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
  }

  &:checked {
    &:enabled {
      background: ${COLOR_INTENT_HIGHLIGHT};
    }

    &:after {
      background-color: #fff;
      width: 5px;
      height: 5px;
    }
  }
`;

export default RadioBox;
