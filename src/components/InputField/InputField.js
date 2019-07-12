import React from "react";
import PropTypes from "prop-types";

import InputWrap from "components/util/InputWrap";
import InputLabelText from "components/util/InputLabelText";
import InputLabelValue from "components/util/InputLabelValue";
import InputHint from "components/util/InputHint";
import InputTextField from "components/util/InputTextField";

export default function InputField({
  autoFocus,
  defaultValue,
  readonly,
  disabled,
  displayAsText,
  hint,
  label,
  labelPosition,
  maxLength,
  placeholder,
  type,
  style,
  value,
  ...props
}) {
  return (
    <InputWrap labelPosition={labelPosition} style={style}>
      {label && <InputLabelText>{label}</InputLabelText>}
      {displayAsText && <InputLabelValue>{value}</InputLabelValue>}
      {!displayAsText && (
        <>
          <InputTextField
            type={type}
            autoFocus={autoFocus}
            defaultValue={defaultValue}
            disabled={disabled}
            maxLength={maxLength}
            placeholder={placeholder}
            {...props}
          />
          {hint && <InputHint>{hint}</InputHint>}
        </>
      )}
    </InputWrap>
  );
}

InputField.propTypes = {
  autoFocus: PropTypes.bool,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  displayAsText: PropTypes.bool,
  hint: PropTypes.string,
  label: PropTypes.string,
  labelPosition: PropTypes.oneOf(["top", "bottom", "left", "right"]),
  maxLength: PropTypes.number,
  placeholder: PropTypes.string,
  readonly: PropTypes.bool,
  style: PropTypes.object,
  type: PropTypes.oneOf([
    "email",
    "password",
    "search",
    "tel",
    "text",
    "url",
    "number"
  ]).isRequired,
  value: PropTypes.oneOf(["string", "number"])
};

InputField.defaultProps = {
  autoFocus: false,
  disabled: false,
  displayAsText: false,
  labelPosition: "top",
  readonly: false,
  type: "text"
};

InputField.displayName = "InputField";
