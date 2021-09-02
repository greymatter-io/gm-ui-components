import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

import InputLabelText from "components/util/InputLabelText";
import InputWrap from "components/util/InputWrap";
import InputHint from "components/util/InputHint";
import InputTextField from "components/util/InputTextField";
import InputReset from "components/util/InputReset";

export default function InputField({
  autoFocus,
  defaultValue,
  readonly,
  disabled,
  hint,
  label,
  labelPosition,
  maxLength,
  placeholder,
  type,
  style,
  className,
  onChange,
  onReset,
  ...props
}) {
  const [hasValue, setHasValue] = useState(false);
  const input = useRef(null);

  useEffect(() => {
    if (input.current.value !== "") {
      setHasValue(true);
    }
  }, []); // run once on render

  function internalOnChange(e) {
    setHasValue(!!e.target.value);
    if (onChange) {
      onChange(e);
    }
  }

  function localOnReset() {
    input.current.value = "";
    setHasValue(false);
    if (onReset) {
      onReset();
    }
  }

  return (
    <InputWrap
      labelPosition={labelPosition}
      style={style}
      className={className}
    >
      {label && <InputLabelText>{label}</InputLabelText>}
      <InputTextField
        ref={input}
        type={type}
        autoFocus={autoFocus}
        defaultValue={defaultValue}
        disabled={disabled}
        readonly
        maxLength={maxLength}
        placeholder={placeholder}
        onChange={internalOnChange}
        {...props}
      />
      {(type === "search" || type === "text") && (
        <InputReset visible={hasValue} onClick={localOnReset} />
      )}
      {hint && <InputHint>{hint}</InputHint>}
    </InputWrap>
  );
}

InputField.propTypes = {
  autoFocus: PropTypes.bool,
  className: PropTypes.string,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  hint: PropTypes.string,
  label: PropTypes.string,
  labelPosition: PropTypes.oneOf(["top", "bottom", "left", "right"]),
  maxLength: PropTypes.number,
  onChange: PropTypes.func,
  onReset: PropTypes.func,
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
  ]).isRequired
};

InputField.defaultProps = {
  autoFocus: false,
  disabled: false,
  labelPosition: "top",
  readonly: false,
  type: "text"
};

InputField.displayName = "InputField";
