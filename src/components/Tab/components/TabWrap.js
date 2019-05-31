import styled, { css } from "styled-components";

import { spacingScale } from "style/styleFunctions";
import { keen } from "style/theme";

const activeStyles = css`
  box-shadow: ${props => props.theme.COLOR_INTENT_HIGHLIGHT} 0px -2px inset;
`;

const hoverStyles = css`
  box-shadow: ${props => props.theme.COLOR_BRAND_A} 0px -1px inset;
`;

const downStyles = css`
  box-shadow: ${props => props.theme.COLOR_INTENT_HIGHLIGHT} 0px -2px inset;
`;

const TabWrap = styled.a.attrs({
  disabled: props => props.disabled
})`
  font-family: ${props => props.theme.FONT_STACK_BASE};
  font-size: ${props => props.theme.FONT_SIZE_BASE};
  color: ${props => props.theme.COLOR_CONTENT};
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

  /* if active... */
  ${props =>
    props.active &&
    css`
      &,
      &:hover,
      &:active {
        ${activeStyles};
      }
    `};

  ${props =>
    props.disabled &&
    css`
      &,
      &:hover,
      &:active {
        cursor: default;
        opacity: ${props => props.theme.OPACITY_70};
        box-shadow: none;
      }
    `};
`;

TabWrap.defaultProps = {
  theme: keen
};

export default TabWrap;
