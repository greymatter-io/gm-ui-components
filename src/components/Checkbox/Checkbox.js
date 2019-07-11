import React from "react";
import { PropTypes } from "prop-types";

import InputLabelText from "components/util/InputLabelText";
import InputWrap from "components/util/InputWrap";

import CheckboxBox from "./components/CheckboxBox";

const Checkbox = ({
  label,
  labelPosition,
  value,
  defaultChecked,
  readonly,
  disabled,
  style,
  ...props
}) => {
  return (
    <InputWrap labelPosition={labelPosition} style={style}>
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
  checked : PropTypes.bool,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  labelPosition: PropTypes.oneOf(["top", "bottom", "left", "right"]),
  onChange: PropTypes.func,
  readonly: PropTypes.bool,
  value: PropTypes.string
};

Checkbox.defaultProps = {
  defaultChecked: false,
  disabled: false,
  labelPosition: "right",
  readonly: false
};

Checkbox.displayName = "Checkbox";

export default Checkbox;
