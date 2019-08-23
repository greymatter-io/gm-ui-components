import React from "react";
import { PropTypes } from "prop-types";
import styled, { css } from "styled-components";
import { readableColor } from "polished";

const ToggleSwitchElement = styled.input.attrs(props => ({
  type: "checkbox"
}))`
  appearance: none;
  border-radius: 3em;
  height: 1em;
  width: 1.615em;
  display: flex;
  transition: all 0.3s ease;
  padding: 1px;
  position: relative;
  outline: none;

  &:not(:disabled) {
    cursor: pointer;
  }

  &:disabled {
    opacity: ${({ theme }) => theme.OPACITY_LIGHTER};
  }

  ${props =>
    props.color
      ? css`
          box-shadow: inset 0 0 0 1px ${props => props.color};
        `
      : css`
          box-shadow: inset 0 0 0 1px
            ${({ theme }) => theme.COLOR_INTENT_HIGHLIGHT};
        `}

  &:before {
    content: "";
    background: #fff;
    box-shadow: 0 0 0 1px ${({ theme }) => theme.COLOR_KEYLINE_DEFAULT};
    height: 100%;
    width: 100%;
    border-radius: inherit;
    transition: margin 0.15s ease;
    z-index: 2;
  }

  &:after {
    color: ${({ theme }) => theme.COLOR_CONTENT_DEFAULT};
    z-index: 1;
    display: flex;
    font-size: 0.3em;
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
      margin-left: calc(((1.615em) / 2.5));
    }

    &:not(:disabled):hover:before {
      margin-left: calc(((1.615em) / 2.5) - 0.08em);
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
      margin-right: calc(((1.615em) / 2.5));
    }

    &:not(:disabled)hover:before {
      margin-right: calc(((1.615em) / 2.5) - 0.08em);
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
  ...props
}) {
  return (
    <ToggleSwitchElement
      color={color}
      onInnerLabel={onInnerLabel}
      offInnerLabel={offInnerLabel}
      {...props}
    />
  );
}

ToggleSwitch.propTypes = {
  color: PropTypes.string,
  onInnerLabel: PropTypes.string,
  offInnerLabel: PropTypes.string
};

ToggleSwitch.defaultProps = {};

ToggleSwitch.displayName = "ToggleSwitch";
