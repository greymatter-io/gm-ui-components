import React from "react";
import styled from "styled-components";
import { COLOR_BRAND_PRIMARY } from "../../style/colorVariables";
import { transparentize, lighten } from "polished";

const Input = styled.input.attrs({
  type: "text",
  placeholder: props => props.placeholder,
  maxLength: props => props.maxlength
})`
  user-select: auto;
  text-align: left;
  font-size: 14px;
  border-radius: 3px;
  padding: 8px;
  font-weight: 500;
  border: 1px solid #f0f0f0;
  line-height: 1.4;
  border-style: solid;
  text-transform: none;
  width: ${props => (props.shouldFitContainer ? "100%" : "auto")};
  border-top-color: ${lighten("3%", "#ececec")};
  border-bottom-color: #cdcdcd;
  color: black;
  box-shadow: inset 0 0 0 rgba(0, 0, 0, 0), 0 0 0 rgba(0, 0, 0, 0),
    0 0 0 rgba(0, 0, 0, 0);
  &::placeholder {
    text-align: center;
  }
  &::-ms-expand {
    background-color: transparent;
    border: 0;
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
