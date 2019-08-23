import React from "react";
import { PropTypes } from "prop-types";
import styled, { css } from "styled-components";
import { readableColor } from "polished";
import { formInteractionStyles } from "components/util/InputFieldInteractionStyles";
import InputWrap from "components/util/InputWrap";
import InputLabelText from "components/util/InputLabelText";

const ToggleSwitchElement = styled.input.attrs(props => ({
  type: "checkbox"
}))`
  ${formInteractionStyles()};
  appearance: none;
  border-radius: 10em;
  height: 1em;
  width: 1.615em;
  display: flex;
  transition: all 0.3s ease;
  border: 1px solid;
  position: relative;
  outline: none;
  box-sizing: content-box;

  &:not(:disabled) {
    cursor: pointer;
  }

  &:disabled {
    opacity: ${({ theme }) => theme.OPACITY_LIGHTER};
  }

  &,
  &:focus,
  &:focus:active {
  ${props =>
    props.color
      ? css`
          border-color: ${props => props.color};
        `
      : css`
          border-color: ${({ theme }) => theme.COLOR_INTENT_HIGHLIGHT};
        `}
  }


  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
    box-shadow: 0 0 0 1px ${({ theme }) => theme.COLOR_KEYLINE_DEFAULT};
    border-radius: inherit;
    transition: all 0.15s ease;
    z-index: 2;
  }

  &:after {
    color: ${({ theme }) => theme.COLOR_CONTENT_DEFAULT};
    z-index: 1;
    display: flex;
    font-size: 0.25em;
    text-transform: uppercase;
    align-self: center;
    position: absolute;
    text-align: center;
    align-items: center;
    justify-content: center;
    width: 45%;
    left: auto;
    right: 0;
  }

  &:checked {
    ${props =>
      props.color
        ? css`
            background: ${props => props.color};
          `
        : css`
            background: ${({ theme }) => theme.COLOR_INTENT_HIGHLIGHT};
          `}

    &:before {
      left: 37%;
      right: 0;
    }

    &:not(:disabled):hover:before {
      left: 30%;
    }

    &:after {
      content: "${props => props.onInnerLabel}";
      left: 0;
      right: auto;

      ${props =>
        props.color
          ? css`
              color: ${props => readableColor(props.color)};
            `
          : css`
              color: ${({ theme }) =>
                readableColor(theme.COLOR_INTENT_HIGHLIGHT)};
            `}
    }
  }

  &:not(:checked) {
    background: ${({ theme }) => theme.COLOR_BACKGROUND_THREE};

    &:before {
      right: 37%;
      left: 0;
    }

    &:not(:disabled):hover:before {
      right: 30%;
    }

    &:after {
      content: "${props => props.offInnerLabel}";
      left: auto;
      right: 0;
    }
  }
`;

/**
 * Description of your component
 */
export default function ToggleSwitch({
  color,
  onInnerLabel,
  offInnerLabel,
  labelPosition,
  label,
  ...props
}) {
  return (
    <InputWrap labelPosition={labelPosition}>
      {label && <InputLabelText>{label}</InputLabelText>}
      <ToggleSwitchElement
        color={color}
        onInnerLabel={onInnerLabel}
        offInnerLabel={offInnerLabel}
        {...props}
      />
    </InputWrap>
  );
}

ToggleSwitch.propTypes = {
  color: PropTypes.string,
  label: PropTypes.string,
  labelPosition: PropTypes.oneOf(["top", "bottom", "left", "right"]),
  offInnerLabel: PropTypes.string,
  onInnerLabel: PropTypes.string
};

ToggleSwitch.defaultProps = {
  labelPosition: "right"
};

ToggleSwitch.displayName = "ToggleSwitch";
