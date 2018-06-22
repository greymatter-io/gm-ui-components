import { PropTypes } from "prop-types";
import React from "react";

import ButtonWrap from "./components/ButtonWrap";
import ButtonLabelPrefix from "./components/ButtonLabelPrefix";
import ButtonLabelSuffix from "./components/ButtonLabelSuffix";

Button.propTypes = {
  active: PropTypes.bool, // If the button should be style as active or not
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  clickAction: PropTypes.any.isRequired, // click handler
  disabled: PropTypes.bool, // disables the button
  label: PropTypes.string, // label for the button
  labelStyle: PropTypes.object,
  orientation: PropTypes.oneOf(["vertical", "horizontal"]), // Vertical: Icon top, label bottom; Horizontal: Icon left, label right;
  outline: PropTypes.bool,
  prefix: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // Add prefix text to button label
  size: PropTypes.oneOf(["normal", "xs", "sm", "lg", "xl"]), // Relative size of the button
  style: PropTypes.object, // style prop
  suffix: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // Add suffix text to button label
  tabIndex: PropTypes.number,
  type: PropTypes.oneOf([
    "default",
    "danger",
    "info",
    "primary",
    "secondary",
    "warning"
  ])
};

Button.defaultProps = {
  active: false,
  clickAction: () => {},
  label: "",
  disabled: false,
  size: "normal",
  orientation: "horizontal"
};

/**
 * General purpose button
 * @param {Object} props - see propTypes
 * @returns JSX.Element
 */
export default function Button({
  active,
  children,
  clickAction,
  disabled,
  label,
  orientation,
  prefix,
  size,
  style,
  suffix,
  outline,
  tabIndex,
  type,
  labelStyle,
  ...props
}) {
  return (
    <ButtonWrap
      active={active}
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
      {label.length > 0 && (
        <span style={labelStyle}>
          {prefix ? <ButtonLabelPrefix>{prefix}</ButtonLabelPrefix> : ""}
          {label}
          {suffix ? <ButtonLabelSuffix>{suffix}</ButtonLabelSuffix> : ""}
        </span>
      )}
    </ButtonWrap>
  );
}

Button.displayName = "Button";
