import React from "react";
import { PropTypes } from "prop-types";

import InputLabelText from "../../components/InputLabelText";
import InputWrap from "../../components/InputWrap";

import CheckboxBox from "./components/CheckboxBox";

const Checkbox = ({
  label,
  labelPosition,
  value,
  defaultChecked,
  readonly,
  disabled,
  ...props
}) => {
  return (
    <InputWrap labelPosition={labelPosition}>
      {label && <InputLabelText>{label}</InputLabelText>}
      <CheckboxBox
        defaultChecked={defaultChecked}
        value={value}
        disabled={disabled}
        {...props}
      />
    </InputWrap>
  );
};

Checkbox.propTypes = {
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  labelPosition: PropTypes.oneOf(["top", "bottom", "left", "right"]),
  onChange: PropTypes.func,
  readonly: PropTypes.bool,
  value: PropTypes.string
};

Checkbox.displayName = "Checkbox";

export default Checkbox;
