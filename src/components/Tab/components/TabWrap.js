import styled from "styled-components";

import { spacingScale } from "style/styleFunctions";

const activeStyles = `
    box-shadow: ${props => props.theme.COLOR_INTENT_HIGHLIGHT} 0px -2px inset;
  `;

const disabledStyles = `
  `;

const hoverStyles = `
    box-shadow: ${props => props.theme.COLOR_KEYLINE_SOLID} 0px -1px inset;
  `;

const downStyles = `
    box-shadow: ${props => props.theme.COLOR_INTENT_HIGHLIGHT} 0px -2px inset;
  `;

const TabWrap = styled.a.attrs({
  disabled: props => props.disabled
})`
  font-family: ${props => props.theme.FONT_STACK_BASE};
  font-size: ${props => props.theme.FONT_SIZE_BASE};
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
    `
      &,
      &:hover,
      &:active {
        ${activeStyles};
      }
    `};

  ${props =>
    props.disabled &&
    `
      &,
      &:hover,
      &:active {
        cursor: default;
        opacity: ${props => props.theme.OPACITY_70};
        box-shadow: none;
      }
    `};
`;

export default TabWrap;
