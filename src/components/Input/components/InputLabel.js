import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FONT_SIZE_SM } from "../../../style/styleVariables";
import { spacingScale } from "../../../style/styleFunctions";

InputLabel.PropTypes = {
  fieldName: PropTypes.string,
  children: PropTypes.oneOf([PropTypes.object, PropTypes.array])
}

const InputLabelElement = styled.label.attrs({
  for: props => props.fieldname
}) `
  font-size: ${FONT_SIZE_SM};
  display: block;
  padding-left: ${spacingScale(1.5)};
  opacity: 0;

    position: absolute;
    z-index: -100;
    visibility: hidden;
`;

export default function InputLabel({ children, fieldName, placeholder }) {
  return (
    <InputLabelElement fieldName={fieldName} placeholder={placeholder}>
      {placeholder || children}
    </InputLabelElement>
  )
};