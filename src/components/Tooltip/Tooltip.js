import React from "react";
import PropTypes from "prop-types";
import TooltipContent from "./components/TooltipContent";
import TooltipWrap from "./components/TooltipWrap";

export default function Tooltip({
  children,
  content,
  position,
  hideTooltip,
  tooltipStyle = {}
}) {
  // Always hide the tooltip if the content is empty
  if (!content) hideTooltip = true;
  return (
    <TooltipWrap hideTooltip={hideTooltip}>
      {children}
      <TooltipContent style={tooltipStyle} position={position}>
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
  content: PropTypes.string,
  hideTooltip: PropTypes.bool,
  position: PropTypes.oneOf(["top", "bottom", "left", "right"]),
  tooltipStyle: PropTypes.object
};

Tooltip.defaultProps = {
  position: "bottom"
};

Tooltip.displayName = "Tooltip";
