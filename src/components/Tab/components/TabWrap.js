import styled from "styled-components";
import {
  COLOR_BRAND_PRIMARY,
  FONT_STACK_BASE,
  FONT_SIZE_BASE,
  COLOR_GREY
} from "style/styleVariables";
import { lighten } from "polished";

const activeStyles = `
    box-shadow: ${COLOR_BRAND_PRIMARY} 0px -2px inset;
  `;

const disabledStyles = `
    cursor: default;
    opacity: .5;
    box-shadow: none;
  `;

const hoverStyles = `
    box-shadow: ${lighten(0.5, COLOR_GREY)} 0px -1px inset;
  `;

const downStyles = `
    box-shadow: ${COLOR_BRAND_PRIMARY} 0px -2px inset;
  `;

const TabWrap = styled.a.attrs({
  disabled: props => props.disabled
})`
  font-family: ${FONT_STACK_BASE};
  font-size: ${FONT_SIZE_BASE};
  flex: 0 0 auto;
  padding: 8px 16px;
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

  // if disabled...
  ${props =>
    props.disabled &&
    `
      &,
      &:hover,
      &:active {
        ${disabledStyles};
      }
    `};
`;

export default TabWrap;
