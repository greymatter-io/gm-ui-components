import React from 'react';
import PropTypes from "prop-types";

import styled, { keyframes } from "styled-components";
import { transparentize } from 'polished';

import { spacingScale } from 'style/styleFunctions';
import { COLOR_BRAND_PRIMARY, COLOR_CONTENT_BACKGROUND, FONT_SIZE_XS, FONT_STACK_BASE } from 'style/styleVariables';


const SPINNER_COLOR = COLOR_BRAND_PRIMARY;


Spinner.propTypes = {
  message: PropTypes.string,
  orientation: PropTypes.oneOf([
    'vertical',
    'horizontal'
  ])
};

Spinner.defaultProps = {
  orientation: 'vertical',
  message: 'Loading...'
};



const spinGradient = keyframes`
  0% {
    background-position: -100% -100%;
    transform: rotate(0)
  }
  100% {
    background-position: 100% 100%;
    transform: rotate(calc(360deg * 16))
  }
`

const LoadingSpinnerWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${FONT_STACK_BASE};
  margin: auto;
  flex: 0 0 auto;
  
  ${props => props.orientation === 'vertical' ? (`
    text-align: center;
    flex-direction: column;
  `) : (`
    text-align: left;
    flex-direction: row;
  `)}
`;

const LoadingSpinner = styled.div`
  margin: ${spacingScale(1)};
  border-radius: 100px;
  background-image: linear-gradient( to right, ${transparentize(1, SPINNER_COLOR)} 40%, ${SPINNER_COLOR} 60%, ${transparentize(1, SPINNER_COLOR)} );
  background-size: 200% 200%;
  position: relative;
  animation: ${spinGradient} 16s ease infinite;

  &:after {
    box-shadow: 0 0 1px ${transparentize(0.8, SPINNER_COLOR)};
    background-color: ${COLOR_CONTENT_BACKGROUND};
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

const LoadingMessage = styled.p`
  opacity: 0.7;
  font-size: ${FONT_SIZE_XS};
  max-width: 50%;
  margin: 0;
`;


export default function Spinner({ message, orientation }) {
  return (
    <LoadingSpinnerWrap orientation={orientation}>
      <LoadingSpinner orientation={orientation} />
      { message && (<LoadingMessage>{ message }</LoadingMessage>)}
    </LoadingSpinnerWrap>
  )
};
