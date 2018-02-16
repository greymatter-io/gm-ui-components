import styled from "styled-components";
import { decipher } from "../../style/styleVariables";
import { transparentize } from "polished";

const theme = decipher;

const Input = styled.input.attrs({
  type: "text",
  placeholder: props => props.placeholder,
  maxLength: props => props.maxlength
}) `
  user-select: auto;
  text-align: left;
  font-size: ${theme.fontSizeNormal};
  color: ${theme.colorContent};
  padding: ${theme.spacing};
  font-weight: ${theme.fontWeightControls};
  line-height: ${theme.lineHeightControls};
  box-sizing: border-box;
  width: ${props => (props.shouldFitContainer ? "100%" : "auto")};
  border: 1px solid ${theme.colorContent};
  border-radius: ${theme.borderRadiusNormal};
  &::placeholder {
    text-align: center;
  }
  &:hover {
  }
  &:focus {
    outline: none;
    box-shadow: inset 0 0 0 rgba(255, 255, 255, 0.5),
      0 0 0 1px ${transparentize(0.25, theme.colorIntentHighlight)},
      0 0 0 4px ${transparentize(0.75, theme.colorIntentHighlight)};
    &::placeholder {
      color: transparent;
    }
  }
`;

export default Input;
