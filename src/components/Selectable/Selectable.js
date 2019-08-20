import { css } from "styled-components";

const DisabledStyle = css`
  opacity: ${({ theme }) => theme.OPACITY_LIGHTER};

  ${props => props.DisabledStyle && props.DisabledStyle}
`;

const SelectableStyle = css`
  cursor: pointer;

  ${props => props.SelectableStyle && props.SelectableStyle}
`;

const HoverStyle = css`
  ${props => props.HoverStyle && props.HoverStyle}
`;

const FocusStyle = css`
  outline: none;

  &:after {
    opacity: ${({ theme }) => theme.OPACITY_LIGHTER};
  }

  ${props => props.FocusStyle && props.FocusStyle}
`;

const ActiveStyle = css`
  &:after {
    transition-duration: 0;
    opacity: ${({ theme }) => theme.OPACITY_LIGHT};
  }

  ${props => props.ActiveStyle && props.ActiveStyle}
`;

const SelectedStyle = css`
  box-shadow: inset 0 0 0 2px ${({ theme }) => theme.COLOR_INTENT_HIGHLIGHT};

  ${props => props.SelectedStyle && props.SelectedStyle}
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
}
