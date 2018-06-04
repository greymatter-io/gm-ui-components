import React from "react";
import { PropTypes } from "prop-types";

import * as Glyphs from "../Glyphs";
import TabWrap from "./components/TabWrap";
import TabLabel from "./components/TabLabel";

const Tab = ({
  label = "",
  active = false,
  disabled = false,
  children,
  glyph,
  clickAction
}) => {
  const Glyph = Glyphs[glyph];
  return (
    <TabWrap active={active} disabled={disabled} onClick={clickAction}>
      {glyph && <Glyph />}
      <TabLabel>{label}</TabLabel>
      {children}
    </TabWrap>
  );
};

Tab.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.any,
  clickAction: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  glyph: PropTypes.string,
  label: PropTypes.string.isRequired
};

export default Tab;
