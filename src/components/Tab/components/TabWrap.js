import styled, { css } from "styled-components";

import { spacingScale } from "style/styleFunctions";
import { keen } from "style/theme";

const activeStyles = css`
  box-shadow: ${({theme}) => theme.COLOR_INTENT_HIGHLIGHT} 0px -2px inset;
`;

const hoverStyles = css`
  box-shadow: ${({theme}) => theme.COLOR_INTENT_HIGHLIGHT} 0px -1px inset;
`;

const downStyles = css`
  box-shadow: ${({theme}) => theme.COLOR_INTENT_HIGHLIGHT} 0px -2px inset;
`;

const TabWrap = styled.a.attrs({
  disabled: props => props.disabled
})`
  font-family: ${({theme}) => theme.FONT_STACK_DEFAULT};
  font-size: ${({theme}) => theme.FONT_SIZE_TEXT_DEFAULT};
  color: ${({theme}) => theme.COLOR_CONTENT_DEFAULT};
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
        color: ${({theme}) => theme.COLOR_CONTENT_NONESSENTIAL};
        box-shadow: none;
      }
    `};
`;

TabWrap.defaultProps = {
  theme: keen
};

export default TabWrap;
