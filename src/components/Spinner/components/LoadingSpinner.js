import styled from "styled-components";
import { transparentize } from "polished";

import { spacingScale } from "style/styleFunctions";

import spinGradient from "./spinGradient";

export const LoadingSpinner = styled.div`
  margin: ${spacingScale(1)};
  border-radius: 100px;
  background-image: linear-gradient(
    to right,
    ${props => transparentize(1, props.theme.COLOR_BRAND_A)} 40%,
    ${props => props.theme.COLOR_BRAND_A} 60%,
    ${props => transparentize(1, props.theme.COLOR_BRAND_A)}
  );
  background-size: 200% 200%;
  position: relative;
  animation: ${spinGradient} 16s ease infinite;

  &:after {
    box-shadow: 0 0 1px
      ${props => transparentize(0.8, props.theme.COLOR_BRAND_A)};
    background-color: ${props => props.theme.COLOR_BACKGROUND_A};
    left: 1px;
    top: 1px;
    right: 1px;
    bottom: 1px;
    content: "";
    position: absolute;
    border-radius: inherit;
  }

  ${props =>
    props.orientation === "vertical"
      ? `
    height: ${spacingScale(6)};
    width: ${spacingScale(6)};
  `
      : `
    height: ${spacingScale(2)};
    width: ${spacingScale(2)};
  `};
`;

export default LoadingSpinner;
