import styled from "styled-components";

import {
  COLOR_BACKGROUND_A,
  COLOR_INTENT_HIGHLIGHT
} from "style/styleVariables";

import InputBox from "components/Form/components/InputBox";

const CheckboxBox = styled(InputBox).attrs({
  type: "radio"
})`
  border-radius: 2px;

  &:after {
    width: 25%;
    height: 50%;
    border: 2px solid;
    border-radius: 1px;
    border-color: ${COLOR_BACKGROUND_A};
    background: none;
    border-width: 0 2px 2px 0;
    transform: translateY(-15%) rotate(45deg);
  }

  &:indeterminate {
    &:enabled {
      background: ${COLOR_INTENT_HIGHLIGHT};
    }

    &:after {
      opacity: 1;
      width: 50%;
      height: 0;
      border-width: 0 0 2px;
      transform: none;
    }
  }
`;

export default CheckboxBox;
