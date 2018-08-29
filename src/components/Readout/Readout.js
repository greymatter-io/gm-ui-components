import React from "react";
import { PropTypes } from "prop-types";

import { COLOR_INTENT_SUCCESS } from "style/styleVariables";
import ReadoutDisplay from "./components/ReadoutDisplay";
import ReadoutItem, { ReadoutItemShape } from "./components/ReadoutItem";

export default function Readout({
  children,
  primary,
  color = COLOR_INTENT_SUCCESS,
  readoutItems = [],
  ...props
}) {
  return (
    <ReadoutDisplay primary={primary} color={color} {...props}>
      {readoutItems.map(item => (
        <ReadoutItem
          key={`${item.title}|${item.value}|${item.detail}`}
          {...item}
        />
      ))}
      {children}
    </ReadoutDisplay>
  );
}

Readout.propTypes = {
  children: PropTypes.element,
  color: PropTypes.string,
  primary: PropTypes.bool,
  readoutItems: PropTypes.oneOfType([
    PropTypes.arrayOf(ReadoutItemShape),
    PropTypes.object
  ])
};

Readout.displayName = "Readout";
