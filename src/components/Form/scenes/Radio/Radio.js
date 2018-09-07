import React from "react";
import { PropTypes } from "prop-types";

import InputLabel from "components/Form/components/InputLabel";
import InputWrap from "components/Form/components/InputWrap";

import RadioBox from "./components/RadioBox";

const Radio = ({
  label,
  value,
  defaultChecked,
  disabled,
  readonly,
  labelPosition = "left",
  ...props
}) => {
  return (
    <InputWrap>
      <InputLabel labelPosition={labelPosition}>
        <RadioBox
          defaultChecked={defaultChecked}
          value={value}
          disabled={disabled}
          {...props}
        />
        {label}
      </InputLabel>
    </InputWrap>
  );
};

Radio.propTypes = {
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  labelPosition: PropTypes.oneOf(["top", "bottom", "left", "right"]),
  onChange: PropTypes.func,
  readonly: PropTypes.bool.isRequired,
  value: PropTypes.string
};

Radio.displayName = "Radio";

export default Radio;
