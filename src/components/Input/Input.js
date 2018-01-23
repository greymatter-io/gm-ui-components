import styled from "styled-components";
import { COLOR_BRAND_PRIMARY } from "../../style/colorVariables";
import { transparentize } from "polished";

const Input = styled.input.attrs({
  type: "text",
  placeholder: props => props.placeholder,
  maxLength: props => props.maxlength
})`
  user-select: auto;
  text-align: left;
  font-size: 14px;
  color: black;
  padding: 8px;
  font-weight: 500;
  line-height: 2;
  box-sizing: border-box;
  width: ${props => (props.shouldFitContainer ? "100%" : "auto")};
  border: 1px solid #f0f0f0;
  border-radius: 3px;
  border-bottom-color: #cdcdcd;
  box-shadow: inset 0 0 0 rgba(0, 0, 0, 0), 0 0 0 rgba(0, 0, 0, 0),
    0 0 0 rgba(0, 0, 0, 0);
  &::placeholder {
    text-align: center;
  }
  &:hover {
    background-color: #fbfbfb;
  }
  &:focus {
    outline: none;
    box-shadow: inset 0 0 0 rgba(255, 255, 255, 0.5),
      0 0 0 1px ${transparentize(0.25, COLOR_BRAND_PRIMARY)},
      0 0 0 4px ${transparentize(0.75, COLOR_BRAND_PRIMARY)};
    &::placeholder {
      color: transparent;
    }
  }
`;

export default Input;
