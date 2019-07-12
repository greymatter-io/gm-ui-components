import React from "react";
import { PropTypes } from "prop-types";
import styled from "styled-components";

import InputWrap from "components/util/InputWrap";
import InputLabelText from "components/util/InputLabelText";
import InputLabelValue from "components/util/InputLabelValue";
import { IconCheckmark, IconX } from "components/Glyphs";
import CheckboxBox from "./components/CheckboxBox";
import { spacingScale } from "style/styleFunctions";

const AlginedIcon = styled.div`
  margin: 0 0 ${spacingScale(-0.25)} ${spacingScale(-0.5)};
`;

const Checkbox = ({
  checked,
  defaultChecked,
  disabled,
  displayAsText,
  label,
  labelPosition,
  readonly,
  value,
  ...props
}) => {
  return (
    <InputWrap labelPosition={labelPosition} {...props}>
      {displayAsText && (
        <>
          {label && <InputLabelValue>{label}</InputLabelValue>}
          <AlginedIcon>
            {checked && <IconCheckmark />}
            {!checked && <IconX />}
          </AlginedIcon>
        </>
      )}
      {!displayAsText && (
        <>
          {label && <InputLabelText>{label}</InputLabelText>}
          <CheckboxBox
            defaultChecked={defaultChecked}
            value={value}
            disabled={disabled}
          />
        </>
      )}
    </InputWrap>
  );
};

Checkbox.propTypes = {
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  displayAsText: PropTypes.bool,
  label: PropTypes.string.isRequired,
  labelPosition: PropTypes.oneOf(["top", "bottom", "left", "right"]),
  onChange: PropTypes.func,
  readonly: PropTypes.bool,
  value: PropTypes.string
};

Checkbox.defaultProps = {
  checked: false,
  defaultChecked: false,
  disabled: false,
  displayAsText: false,
  labelPosition: "right",
  readonly: false
};

Checkbox.displayName = "Checkbox";

export default Checkbox;
