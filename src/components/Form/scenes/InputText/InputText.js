import React from "react";
import PropTypes from "prop-types";

import InputLabelText from "../../components/InputLabelText";
import InputWrap from "../../components/InputWrap";
import InputHint from "../../components/InputHint";
import InputField from "../../components/InputField";

InputText.propTypes = {
  autoFocus: PropTypes.bool,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  hint: PropTypes.string,
  label: PropTypes.string,
  labelPosition: PropTypes.oneOf(["top", "bottom", "left", "right"]),
  maxLength: PropTypes.number,
  placeholder: PropTypes.string,
  readonly: PropTypes.bool
};

export default function InputText({
  autoFocus,
  defaultValue,
  readonly,
  disabled,
  hint,
  label,
  labelPosition,
  maxLength,
  placeholder,
  ...props
}) {
  return (
    <InputWrap labelPosition={labelPosition}>
      {label && <InputLabelText>{label}</InputLabelText>}
      <InputField
        type="text"
        autoFocus={autoFocus}
        defaultValue={defaultValue}
        disabled={disabled}
        readonly
        maxLength={maxLength}
        placeholder={placeholder}
        {...props}
      />
      {hint && <InputHint>{hint}</InputHint>}
    </InputWrap>
  );
}
