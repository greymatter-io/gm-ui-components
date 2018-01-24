import React from "react";
import styled from "styled-components";
import { PropTypes } from "prop-types";
import { COLOR_BRAND_PRIMARY } from "../../style/styleVariables";

const Box = styled.input.attrs({
  type: "checkbox"
})`
  appearance: none;
  background-color: #fafafa;
  border: 1px solid ${COLOR_BRAND_PRIMARY};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),
    inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
  padding: 6px;
  height: 8px;
  position: relative;
  border-radius: 3px;
  &:checked {
    &:after {
      content: "\u2714";
      font-size: 10px;
      position: absolute;
      top: 0px;
      left: 2px;
      color: ${COLOR_BRAND_PRIMARY};
    }
  }
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  > input {
    margin: 0 8px;
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
