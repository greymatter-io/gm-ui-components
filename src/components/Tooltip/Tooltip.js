import React from "react";
import PropTypes from "prop-types";
import { Manager, Reference, Popper } from "react-popper";
import TooltipContent from "./components/TooltipContent";
import TooltipWrap from "./components/TooltipWrap";

export default class Tooltip extends React.Component {
  state = {
    visible: false
  };

  toggleVisibility = () => this.setState({ visible: !this.state.visible });

  render() {
    let {
      children,
      content,
      position,
      hideTooltip,
      tooltipStyle = {},
      ...props
    } = this.props;
    // Always hide the tooltip if the content is empty
    if (!content) hideTooltip = true;
    return (
      <Manager>
        <Reference>
          {({ ref }) => (
            <TooltipWrap
              innerRef={ref}
              onMouseEnter={this.toggleVisibility}
              onMouseLeave={this.toggleVisibility}
              {...props}
            >
              {children}
            </TooltipWrap>
          )}
        </Reference>
        <Popper placement={position}>
          {({ ref, style, placement }) => {
            return (
              <TooltipContent
                innerRef={ref}
                style={{ ...style, ...tooltipStyle }}
                visible={!hideTooltip && this.state.visible}
              >
                {content}
              </TooltipContent>
            );
          }}
        </Popper>
      </Manager>
    );
  }
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
