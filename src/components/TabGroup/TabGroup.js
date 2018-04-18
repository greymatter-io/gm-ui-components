import React from "react";
import { PropTypes } from "prop-types";

import TabGroupLabel from "./components/TabGroupLabel";
import TabGroupWrap from "./components/TabGroupWrap";

const TabGroup = ({ label, children }) => {
  return (
    <TabGroupWrap>
      <TabGroupLabel>{label}</TabGroupLabel>
      {children}
    </TabGroupWrap>
  );
};

TabGroup.propTypes = {
  children: PropTypes.any,
  label: PropTypes.string
};

export default TabGroup;
