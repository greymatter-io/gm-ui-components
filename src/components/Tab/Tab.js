import React from "react";
import { PropTypes } from "prop-types";

import TabWrap from "./components/TabWrap";
import TabLabel from "./components/TabLabel";

const Tab = ({
  label = "",
  active = false,
  children,
  clickAction,
  ...props
}) => {
  return (
    <TabWrap active={active} onClick={clickAction} {...props}>
      {children}
      <TabLabel>{label}</TabLabel>
    </TabWrap>
  );
};

Tab.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.any,
  clickAction: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
};

Tab.displayName = "Tab";

export default Tab;
