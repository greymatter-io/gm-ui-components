import styled from "styled-components";

import { keen } from "style/styleVariables";

import InputBox from "components/Form/components/InputBox";

const CheckboxBox = styled(InputBox).attrs({
  type: "checkbox"
})`
  border-radius: ${props => parseInt(props.theme.RADIUS_05, 10) / 2 + 1}px;
  box-sizing: border-box;

  &:after {
    width: 25%;
    height: 50%;
    border-style: solid;
    border-width: 0 2px 2px 0;
    border-color: ${props => props.theme.COLOR_BACKGROUND_A};
    margin-top: -1px;
    transform: translateY(-50%) translateX(-50%) rotate(45deg) scale(0.1);
    background: none;
    transition: all 0.3s ease;
  }

  &:checked:after {
    transform: translateY(-50%) translateX(-50%) rotate(45deg) scale(1);
  }

  &:indeterminate {
    &:enabled {
      background: ${props => props.theme.COLOR_INTENT_HIGHLIGHT};
    }

    &:after {
      opacity: 1;
      width: 50%;
      height: 0;
      border-width: 0 0 2px;
      transform: translateY(-50%) translateX(-50%) rotate(0) scale(1);
    }
  }
`;

CheckboxBox.defaultProps = {
  theme: keen
};

export default CheckboxBox;
