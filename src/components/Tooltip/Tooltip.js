import React from "react";
import PropTypes from "prop-types";

import TooltipContent from "./components/TooltipContent";
import TooltipWrap from "./components/TooltipWrap";

export default function Tooltip({ children, content, position }) {
  return (
    <TooltipWrap>
      {children}
      <TooltipContent position={position}>{content}</TooltipContent>
    </TooltipWrap>
  );
}

Tooltip.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  content: PropTypes.string.isRequired,
  position: PropTypes.oneOf(["top", "bottom", "left", "right"])
};

Tooltip.defaultProps = {
  position: "bottom"
};
