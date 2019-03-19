import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { transparentize } from "polished";

import { spacingScale } from "style/styleFunctions";

import spinGradient from "./spinGradient";

export const SpinnerSVG = styled.svg`
  animation: ${spinGradient} 16s ease infinite;
  margin: ${spacingScale(1)};
  color: ${props => props.theme.COLOR_INTENT_HIGHLIGHT};
  overflow: visible;
  ${props =>
    props.orientation === "vertical" ? verticalStyles : horizontalStyles};
`;

SpinnerSVG.displayName = "SpinnerSVG";

export const verticalStyles = css`
  height: ${spacingScale(6)};
  width: ${spacingScale(6)};
`;

export const horizontalStyles = css`
  height: ${spacingScale(2)};
  width: ${spacingScale(2)};
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
          <stop offset="0%" stopOpacity="0.15" stopColor="currentColor" />
          <stop offset="33%" stopOpacity="0.15" stopColor="currentColor" />
          <stop offset="100%" stopColor="currentColor" />
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

LoadingSpinner.propTypes = {
  orientation: PropTypes.oneOf(["vertical", "horizontal"]),
  theme: PropTypes.shape({ brandColor: PropTypes.string })
};

LoadingSpinner.displayName = "LoadingSpinner";

export default LoadingSpinner;
