import React from "react";
import PropTypes from "prop-types";

import TooltipContent from "./components/TooltipContent";
import TooltipWrap from "./components/TooltipWrap";

export default function Tooltip({
  children,
  content,
  position,
  hideTooltip,
  contentStyle = {},
  containerStyle = {}
}) {
  // Always hide the tooltip if the content is empty
  if (!content) hideTooltip = true;
  return (
    <TooltipWrap style={containerStyle} hideTooltip={hideTooltip}>
      {children}
      <TooltipContent style={contentStyle} position={position}>
        {content}
      </TooltipContent>
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
  containerStyle: PropTypes.object,
  content: PropTypes.string,
  contentStyle: PropTypes.object,
  hideTooltip: PropTypes.bool,
  position: PropTypes.oneOf(["top", "bottom", "left", "right"])
};

Tooltip.defaultProps = {
  position: "bottom"
};
