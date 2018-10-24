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
    transform: translateX(-50%) translateY(-50%) scale(0.1);
    transition: all 0.3s ease;
  }

  &:checked {
    &:enabled {
      background: ${({ theme }) => theme.brandColor || COLOR_INTENT_HIGHLIGHT};
    }

    &:after {
      background-color: #fff;
      width: 5px;
      height: 5px;
      transform: translateX(-50%) translateY(-50%) scale(1);
    }
  }
`;

export default RadioBox;
