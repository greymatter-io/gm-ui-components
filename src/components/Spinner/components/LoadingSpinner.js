import styled from "styled-components";
import { transparentize } from 'polished';

import { spacingScale } from 'style/styleFunctions';
import { COLOR_BACKGROUND_A, COLOR_BRAND_A } from 'style/styleVariables';

import spinGradient from './spinGradient';

const SPINNER_COLOR = COLOR_BRAND_A;

export const LoadingSpinner = styled.div`
  margin: ${spacingScale(1)};
  border-radius: 100px;
  background-image: linear-gradient( to right, ${transparentize(1, SPINNER_COLOR)} 40%, ${SPINNER_COLOR} 60%, ${transparentize(1, SPINNER_COLOR)} );
  background-size: 200% 200%;
  position: relative;
  animation: ${spinGradient} 16s ease infinite;

  &:after {
    box-shadow: 0 0 1px ${transparentize(0.8, SPINNER_COLOR)};
    background-color: ${COLOR_BACKGROUND_A};
    left: 1px;
    top: 1px;
    right: 1px;
    bottom: 1px;
    content: '';
    position: absolute;
    border-radius: inherit;
  }
  
  ${props => props.orientation === 'vertical' ? (`
    height: ${spacingScale(6)};
    width: ${spacingScale(6)};
  `) : (`
    height: ${spacingScale(2)};
    width: ${spacingScale(2)};
  `)}
`;

export default LoadingSpinner;