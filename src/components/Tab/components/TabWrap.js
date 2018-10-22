import styled, { css } from "styled-components";

import {
  FONT_STACK_BASE,
  FONT_SIZE_BASE,
  COLOR_INTENT_HIGHLIGHT,
  COLOR_KEYLINE_SOLID,
  OPACITY_50
} from "style/styleVariables";
import { spacingScale } from "style/styleFunctions";

const activeStyles = ({ theme }) => css`
  box-shadow: ${theme.brandColor || COLOR_INTENT_HIGHLIGHT} 0px -2px inset;
`;

const disabledStyles = `
    cursor: default;
    opacity: ${OPACITY_50};
    box-shadow: none;
  `;

const hoverStyles = `
    box-shadow: ${COLOR_KEYLINE_SOLID} 0px -1px inset;
  `;

const downStyles = ({ theme }) => css`
  box-shadow: ${theme.brandColor || COLOR_INTENT_HIGHLIGHT} 0px -2px inset;
`;

const TabWrap = styled.a.attrs({
  disabled: props => props.disabled
})`
  font-family: ${FONT_STACK_BASE};
  font-size: ${FONT_SIZE_BASE};
  padding-left: ${spacingScale(2)};
  padding-right: ${spacingScale(2)};
  flex: 0 0 auto;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    ${hoverStyles};
  }

  &:active {
    ${downStyles};
  }

  // if active...
  ${props =>
    props.active &&
    css`
      &,
      &:hover,
      &:active {
        ${activeStyles};
      }
    `};

  // if disabled...
  ${props =>
    props.disabled &&
    css`
      &,
      &:hover,
      &:active {
        ${disabledStyles};
      }
    `};
`;

export default TabWrap;
