import React, { useState } from "react";
import PropTypes from "prop-types";
import TooltipContent from "./components/TooltipContent";
import TooltipWrap from "./components/TooltipWrap";
import { keen } from "style/theme";
import { usePopper } from "react-popper";
export default function Tooltip({
  children,
  content,
  position,
  hideTooltip,
  tooltipStyle,
  theme,
  ...props
}) {
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement);
  const [isVisible, setVisibility] = useState(false);

  // Always hide the tooltip if the content is empty
  if (!content) hideTooltip = true;
  return (
    <>
      <TooltipWrap
        ref={isVisible ? setReferenceElement : null}
        onMouseEnter={() => setVisibility(true)}
        onMouseLeave={() => setVisibility(false)}
        {...props}
      >
        {children}
      </TooltipWrap>
      <div
        ref={isVisible ? setPopperElement : null}
        style={{ zIndex: theme.ZINDEX_TOOLTIP, ...styles.popper }}
        {...attributes.popper}
      >
        <TooltipContent
          style={{ ...tooltipStyle }}
          visible={!hideTooltip && isVisible}
        >
          {content}
        </TooltipContent>
      </div>
    </>
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
  position: "bottom",
  theme: keen
};

Tooltip.displayName = "Tooltip";
