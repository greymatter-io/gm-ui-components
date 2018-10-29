import React from "react";
import { PropTypes } from "prop-types";

import InputLabelText from "components/Form/components/InputLabelText";
import InputWrap from "components/Form/components/InputWrap";

import SelectField from "./components/SelectField";
import { InputHint } from "../../components/InputHint";

const Select = ({
  autoFocus,
  children,
  hint,
  label,
  labelPosition,
  value,
  disabled,
  ...props
}) => {
  return (
    <InputWrap labelPosition={labelPosition}>
      {label && <InputLabelText>{label}</InputLabelText>}
      <SelectField
        autoFocus={autoFocus}
        value={value}
        disabled={disabled}
        {...props}
      >
        {children}
      </SelectField>
      {hint && <InputHint>{hint}</InputHint>}
    </InputWrap>
  );
};

Select.propTypes = {
  autoFocus: PropTypes.bool,
  children: PropTypes.any,
  disabled: PropTypes.bool,
  hint: PropTypes.string,
  label: PropTypes.string.isRequired,
  labelPosition: PropTypes.oneOf(["top", "bottom", "left", "right"]),
  onChange: PropTypes.func,
  value: PropTypes.string
};

Select.displayName = "Select";

export default Select;
