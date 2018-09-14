import React from "react";
import { PropTypes } from "prop-types";

import InputLabelText from "../../components/InputLabelText";
import InputWrap from "components/Form/components/InputWrap";

import RadioBox from "./components/RadioBox";

const Radio = ({
  label,
  value,
  defaultChecked,
  disabled,
  labelPosition = "left",
  ...props
}) => {
  return (
    <InputWrap labelPosition={labelPosition}>
      {label && <InputLabelText>{label}</InputLabelText>}
      <RadioBox
        defaultChecked={defaultChecked}
        value={value}
        disabled={disabled}
        {...props}
      />
    </InputWrap>
  );
};

Radio.propTypes = {
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  labelPosition: PropTypes.oneOf(["top", "bottom", "left", "right"]),
  onChange: PropTypes.func,
  value: PropTypes.string
};

Radio.displayName = "Radio";

export default Radio;
