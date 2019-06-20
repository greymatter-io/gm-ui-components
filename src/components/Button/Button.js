import { PropTypes } from "prop-types";
import { node } from "../util/PropTypes";
import React from "react";

import ButtonWrap from "./components/ButtonWrap";

/**
 * General purpose button
 * @param {Object} props - see propTypes
 * @returns JSX.Element
 */
function Button({
  active,
  children,
  clickAction,
  dangerouslySetColor,
  disabled,
  label,
  orientation,
  size,
  style,
  outline,
  tabIndex,
  type,
  labelStyle,
  ...props
}) {
  return (
    <ButtonWrap
      active={active}
      dangerouslySetColor={dangerouslySetColor}
      type={type}
      size={size}
      outline={outline}
      orientation={orientation}
      disabled={disabled}
      onClick={clickAction}
      tabIndex={tabIndex}
      title={label}
      style={style}
      {...props}
    >
      {children}
      {label.length > 0 && <span style={labelStyle}>{label}</span>}
    </ButtonWrap>
  );
}

Button.propTypes = {
  active: PropTypes.bool, // If the button should be style as active or not
  children: PropTypes.node,
  clickAction: PropTypes.func.isRequired, // click handler
  dangerouslySetColor: PropTypes.string, // set baseColor irrespective of type-appropriate color
  disabled: PropTypes.bool, // disables the button
  label: PropTypes.string, // label for the button
  labelStyle: PropTypes.object,
  orientation: PropTypes.oneOf(["vertical", "horizontal"]), // Vertical: Icon top, label bottom; Horizontal: Icon left, label right;
  outline: PropTypes.bool,
  size: PropTypes.oneOf(["normal", "xs", "sm", "lg", "xl"]), // Relative size of the button
  style: PropTypes.object, // style prop
  tabIndex: PropTypes.number,
  type: PropTypes.oneOf(["default", "danger", "info", "primary", "warning"])
};

Button.defaultProps = {
  active: false,
  clickAction: () => {},
  disabled: false,
  orientation: "horizontal",
  outline: false,
  size: "normal",
  type: "default"
};

Button.displayName = "Button";

export default Button;
