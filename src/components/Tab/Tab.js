import React from "react";
import { PropTypes } from "prop-types";

import TabWrap from "./components/TabWrap";
import TabLabel from "./components/TabLabel";

const Tab = ({ label = "", active = false, disabled = false, children }) => {
  return (
    <TabWrap active={active} disabled={disabled}>
      {children}
      <TabLabel>{label}</TabLabel>
    </TabWrap>
  );
};

Tab.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.any,
  disabled: PropTypes.bool,
  label: PropTypes.string
};

export default Tab;
