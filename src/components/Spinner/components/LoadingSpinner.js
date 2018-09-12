import React from "react";
import styled from "styled-components";
import { transparentize } from "polished";

import { spacingScale } from "style/styleFunctions";
import { COLOR_BRAND_A } from "style/styleVariables";

import spinGradient from "./spinGradient";

const SPINNER_COLOR = COLOR_BRAND_A;

const SpinnerSVG = styled.svg`
  animation: ${spinGradient} 16s ease infinite;
  margin: ${spacingScale(1)};
  overflow: visible;

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

export function LoadingSpinner(props) {
  return (
    <SpinnerSVG
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      viewBox="0 0 100 100"
      {...props}
    >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color={transparentize(0.85, SPINNER_COLOR)} />
          <stop offset="33%" stop-color={transparentize(0.85, SPINNER_COLOR)} />
          <stop offset="100%" stop-color={SPINNER_COLOR} />
        </linearGradient>
      </defs>
      <circle
        cx="50"
        cy="50"
        r="47"
        stroke="url(#gradient)"
        vectorEffect="non-scaling-stroke"
        strokeWidth="1"
        fill="none"
        transform="rotate(90 50 50)"
      />
    </SpinnerSVG>
  );
}

// export const LoadingSpinner = styled.div`
//   border-radius: 100px;
//   background-image: linear-gradient( to right, ${transparentize(1, SPINNER_COLOR)} 40%, ${SPINNER_COLOR} 60%, ${transparentize(1, SPINNER_COLOR)} );
//   background-size: 200% 200%;
//   position: relative;

//   &:after {
//     box-shadow: 0 0 1px ${transparentize(0.8, SPINNER_COLOR)};
//     background-color: ${COLOR_BACKGROUND_A};
//     left: 1px;
//     top: 1px;
//     right: 1px;
//     bottom: 1px;
//     content: '';
//     position: absolute;
//     border-radius: inherit;
//   }
// `;

export default LoadingSpinner;
