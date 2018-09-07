import React from "react";
import PropTypes from "prop-types";

import InputLabel from "../../components/InputLabel";
import InputWrap from "../../components/InputWrap";
import InputHint from "../../components/InputHint";
import InputField from "../../components/InputField";

InputEmail.propTypes = {
  autoFocus: PropTypes.bool,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  hint: PropTypes.string,
  label: PropTypes.string,
  maxLength: PropTypes.number,
  placeholder: PropTypes.string,
  readonly: PropTypes.bool
};

export default function InputEmail({
  autoFocus,
  defaultValue,
  disabled,
  readonly,
  hint,
  label,
  maxLength,
  placeholder,
  ...props
}) {
  return (
    <InputWrap>
      {label && <InputLabel>{label}</InputLabel>}
      <InputField
        type="email"
        autoFocus={autoFocus}
        defaultValue={defaultValue}
        placeholder={placeholder}
        disabled={disabled}
        readonly={readonly}
        maxLength={maxLength}
        {...props}
      />
      {hint && <InputHint>{hint}</InputHint>}
    </InputWrap>
  );
}
