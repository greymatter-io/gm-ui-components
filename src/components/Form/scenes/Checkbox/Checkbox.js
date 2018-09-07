import React from "react";
import { PropTypes } from "prop-types";

import InputLabel from "../../components/InputLabel";
import InputWrap from "../../components/InputWrap";

import CheckboxBox from "./components/CheckboxBox";

const Checkbox = ({
  label,
  value,
  defaultChecked,
  readonly,
  disabled,
  labelPosition = "left",
  ...props
}) => {
  return (
    <InputWrap>
      <InputLabel labelPosition={labelPosition}>
        <CheckboxBox
          defaultChecked={defaultChecked}
          value={value}
          disabled={disabled}
          readonly={readonly}
          {...props}
        />
        {label}
      </InputLabel>
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
