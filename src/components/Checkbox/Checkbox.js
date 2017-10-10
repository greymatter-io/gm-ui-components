import React from "react";
import styled from "styled-components";
import { COLOR_BRAND_PRIMARY } from "../../style/colorVariables";
import { PropTypes } from "prop-types";

const Box = styled.input.attrs({
  type: "checkbox"
})`
  appearance: none;
  background-color: #fafafa;
  border: 1px solid ${COLOR_BRAND_PRIMARY};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),
    inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
  padding: 6px;
  border-radius: 3px;
  display: inline-block;
  position: relative;
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

const Checkbox = ({ label, ...props }) => {
  return (
    <label>
      <Box {...props} />
      {label}
    </label>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string
};

export default Checkbox;
