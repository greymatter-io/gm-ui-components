import React from "react";
import { PropTypes } from "prop-types";

import TabWrap from "./components/TabWrap";
import TabLabel from "./components/TabLabel";

const Tab = ({
  label = "",
  active = false,
  disabled = false,
  children,
  clickAction,
  ...props
}) => {
  return (
    <TabWrap
      active={active}
      disabled={disabled}
      onClick={clickAction}
      {...props}
    >
      {children}
      <TabLabel>{label}</TabLabel>
    </TabWrap>
  );
};

Tab.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.any,
  clickAction: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired
};

Tab.defaultProps = {
  active: undefined,
  children: undefined,
  disabled: undefined
};

Tab.displayName = "Tab";

export default Tab;
