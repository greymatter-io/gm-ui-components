import React from "react";
import PropTypes from "prop-types";

import InputLabelText from "../../components/InputLabelText";
import InputWrap from "../../components/InputWrap";
import InputHint from "../../components/InputHint";
import InputRangeControl from "./components/InputRangeControl.js";

InputRange.propTypes = {
  autoFocus: PropTypes.bool,
  defaultValue: PropTypes.string,
  hint: PropTypes.string,
  label: PropTypes.string,
  labelPosition: PropTypes.oneOf(["top", "bottom", "left", "right"]),
  maxLength: PropTypes.number,
  placeholder: PropTypes.string
};

export default function InputRange({
  autoFocus,
  defaultValue,
  hint,
  label,
  labelPosition,
  ...props
}) {
  return (
    <InputWrap labelPosition={labelPosition}>
      {label && <InputLabelText>{label}</InputLabelText>}
      <InputRangeControl
        autoFocus={autoFocus}
        defaultValue={defaultValue}
        {...props}
      />
      {hint && <InputHint>{hint}</InputHint>}
    </InputWrap>
  );
}
