import React from "react";
import styled, { css } from "styled-components";
import { transparentize } from "polished";

Selectable.propTypes = {};

Selectable.defaultProps = {};

const DisabledStyle = css`
  opacity: ${({ theme }) => theme.OPACITY_LIGHTER};
`;

const SelectableStyle = css`
  cursor: pointer;
`;

const HoverStyle = css`
  box-shadow: 0 0 0 2px ${({ theme }) => theme.COLOR_INTENT_HIGHLIGHT},
    inset 0 0 0 1px transparent;
`;

const FocusStyle = css`
  box-shadow: 0 0 0 2px ${({ theme }) => theme.COLOR_INTENT_HIGHLIGHT},
    inset 0 0 0 1px white;
`;

const ActiveStyle = css`
  box-shadow: 0 0 0 2px ${({ theme }) => theme.COLOR_INTENT_HIGHLIGHT},
    inset 0 0 0 1px ${({ theme }) => theme.COLOR_INTENT_HIGHLIGHT};
`;

const SelectedStyle = css`
  box-shadow: 0 0 0 2px transparent, inset 0 0 0 1px transparent;
  background-color: ${({ theme }) =>
    transparentize(theme.OPACITY_LIGHTEST, theme.COLOR_INTENT_HIGHLIGHT)};
`;

const SelectableElement = styled.div`
  border-radius: ${({ theme }) => theme.CORNER_RADIUS_CARD_DEFAULT};
  background: #fafafa;
  position: relative;
  box-shadow: 0 0 0 2px transparent, inset 0 0 0 1px transparent;
  user-select: none;
  transition-property: box-shadow, background, opacity, transform;
  transition-duration: 0.15s;
  transition-timing-function: ease;


  ${props =>
    props.isDisabled
      ? css`
          ${DisabledStyle}
        `
      : css`
          ${SelectableStyle}

          &:hover {
            ${HoverStyle}
          }
          :focus {
            ${FocusStyle}
          }
          :active {
            ${ActiveStyle}
          }
        `}

  ${props =>
    props.isHovered &&
    css`
      ${HoverStyle}
    `}

  ${props =>
    props.isFocused &&
    css`
      ${FocusStyle}
    `}

  ${props =>
    props.isActive &&
    css`
      ${ActiveStyle}
    `}

  ${props =>
    props.isSelected &&
    css`
      ${SelectedStyle}
    `}
`;

/**
 * Description of your component
 */
export default function Selectable({
  isActive,
  isDisabled,
  isFocused,
  isHovered,
  isSelected,
  children
}) {
  return (
    <SelectableElement
      isHovered={isHovered}
      isActive={isActive}
      isFocused={isFocused}
      isSelected={isSelected}
      isDisabled={isDisabled}
    >
      {children}
    </SelectableElement>
  );
}

Selectable.displayName = "Selectable";
