import { css } from "styled-components";

const DefaultDisabledStyle = css`
  opacity: ${({ theme }) => theme.OPACITY_LIGHTER};
`;

const DefaultSelectableStyle = css`
  cursor: pointer;
  ${props => props.SelectableStyle}
`;

const DefaultHoverStyle = css`
  ${props => props.HoverStyle}
`;

const DefaultFocusStyle = css`
  outline: none;

  &:after {
    opacity: ${({ theme }) => theme.OPACITY_LIGHTER};
  }

  ${props => props.FocusStyle}
`;

const DefaultActiveStyle = css`
  &:after {
    transition-duration: 0;
    opacity: ${({ theme }) => theme.OPACITY_LIGHT};
  }

  ${props => props.ActiveStyle}
`;

const DefaultSelectedStyle = css`
  box-shadow: inset 0 0 0 2px ${({ theme }) => theme.COLOR_INTENT_HIGHLIGHT};
  ${props => props.SelectedStyle}
`;

export function selectableStyles({ ...props }) {
  return css`
    position: relative;
    user-select: none;
    transition-property: box-shadow, background, opacity, transform, border-color;
    transition-duration: 0.15s;
    transition-timing-function: ease;

    &:after{ 
      content: '';
      position: absolute;
      opacity: 0;
      top: -4px;
      right: -4px;
      left: -4px;
      bottom: -4px;
      border-radius: 4px;
      border: 3px solid ${({ theme }) => theme.COLOR_INTENT_HIGHLIGHT};
      transition-property: inherit;
      transition-duration: inherit;
      transition-timing-function: inherit;
    }

    &:hover,
    &:active,
    &:focus {
      z-index: 1;
    }

    ${props =>
      props.isDisabled
        ? css`
            ${DefaultDisabledStyle}
            ${props.DisabledStyle}
          `
        : css`
            ${DefaultSelectableStyle}
            ${props.SelectableStyle}

            &:hover {
              ${DefaultHoverStyle}
              ${props.HoverStyle}
            }
            :focus {
              ${DefaultFocusStyle}
              ${props.FocusStyle}
            }
            :active {
              ${DefaultActiveStyle}
              ${props.ActiveStyle}
            }
          `}

    ${props =>
      props.isHovered &&
      css`
        ${DefaultHoverStyle}
        ${props.HoverStyle}
      `}

    ${props =>
      props.isFocused &&
      css`
        ${DefaultFocusStyle}
        ${props.FocusStyle}
      `}

    ${props =>
      props.isActive &&
      css`
        ${DefaultActiveStyle}
        ${props.ActiveStyle}
      `}

    ${props =>
      props.isSelected &&
      css`
        ${DefaultSelectedStyle}
        ${props.SelectedStyle}
      `}
  `;
}
