import styled from "styled-components";
import {
  COLOR_BRAND_PRIMARY,
  PADDING_BASE,
  FONT_WEIGHT_CONTROLS
} from "../../../style/styleVariables";

const activeStyles = `
    border-color: ${COLOR_BRAND_PRIMARY};
  `;

const disabledStyles = `
    cursor: default;
    opacity: .8;
    border-color: transparent;
  `;

const hoverStyles = `
    border-color: currentColor;
  `;

const downStyles = `
    border-color: ${COLOR_BRAND_PRIMARY};
  `;

const TabWrap = styled.a.attrs({
  disabled: props => props.disabled
})`
  flex: 0 0 auto;
  padding-left: ${PADDING_BASE}px;
  padding-right: ${PADDING_BASE}px;
  font-weight: ${FONT_WEIGHT_CONTROLS};
  border-bottom: 2px solid;
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
