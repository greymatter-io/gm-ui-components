import React from "react";
import styled from "styled-components";
import { PropTypes } from "prop-types";
import { decipher } from "../../style/styleVariables";

const theme = decipher;

const boxBorderRadius = parseInt(theme.borderRadiusNormal, 10) * .5 + "px";

const Box = styled.input.attrs({
  type: "checkbox"
}) `
  background-color: ${theme.colorBackground};
  border: 1px solid ${theme.colorIntentHighlight};
  border-radius: ${boxBorderRadius};
  transition: ${theme.transitionNormal};
  appearance: none;
  box-sizing: border-box;
  height: 1.5em;
  width: 1.5em;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  &:after { 
    color: ${theme.colorIntentHighlight};
    content: "\u2714";
    flex: 0 0 auto;
    display: block;
    text-align: center;
    overflow: visible;
    width: 0;
    opacity: 0;
    position: relative;
    transition: inherit;
    left: -.35em;
  }

  &:hover:after {
    opacity: .25;
  }

  &:checked {
    &:after {
      opacity: 1;
    }

    &:hover:after {
      opacity: .75;
    }
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${theme.colorIntentHighlight};
  }
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;

  > input {
    margin: 0 ${theme.spacing};
  }
`;

//pick out label, all other props are passed to checkbox element
const Checkbox = ({ label, ...props }) => {
  return (
    <Label>
      <Box {...props} />
      {label}
    </Label>
  );
};

Checkbox.propTypes = {
  defaultChecked: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func
};

export default Checkbox;
