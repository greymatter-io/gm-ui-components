import React from "react";
import { PropTypes } from "prop-types";

import Label from "./components/Label";
import Box from "./components/Box";

const Checkbox = ({ label, value, defaultChecked, ...props }) => {
  return (
    <Label for={label}>
      <Box
        defaultChecked={defaultChecked}
        id={label}
        name={label}
        value={value}
        {...props}
      />
      {label}
    </Label>
  );
};

Checkbox.propTypes = {
  defaultChecked: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.string
};

export default Checkbox;
