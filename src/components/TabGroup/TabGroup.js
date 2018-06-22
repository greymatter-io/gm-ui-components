import React from "react";
import { PropTypes } from "prop-types";

import TabGroupLabel from "./components/TabGroupLabel";
import TabGroupWrap from "./components/TabGroupWrap";

const TabGroup = ({ label, children, ...props }) => {
  return (
    <TabGroupWrap {...props}>
      {label && <TabGroupLabel>{label}</TabGroupLabel>}
      {children}
    </TabGroupWrap>
  );
};

TabGroup.displayName = "TabGroup";

TabGroup.propTypes = {
  children: PropTypes.any,
  label: PropTypes.string
};

export default TabGroup;
