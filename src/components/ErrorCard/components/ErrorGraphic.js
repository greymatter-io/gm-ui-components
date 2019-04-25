import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import { spacingScale } from "style/styleFunctions";
import { keen } from "style/styleVariables";

export const ErrorGraphicSVG = styled.svg`
  margin: ${spacingScale(1)};
  color: ${props => props.theme.COLOR_INTENT_HIGHLIGHT};
  overflow: visible;
  ${props =>
    props.orientation === "vertical" ? verticalStyles : horizontalStyles};

  path {
    vector-effect: non-scaling-stroke;
  }
`;

export const verticalStyles = css`
  height: ${spacingScale(6)};
  width: ${spacingScale(6)};
`;

export const horizontalStyles = css`
  height: ${spacingScale(4)};
  width: ${spacingScale(4)};
`;

function ErrorGraphic(props) {
  return (
    <ErrorGraphicSVG
      width="177"
      height="177"
      viewBox="0 0 177 177"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fillRule="nonzero" stroke="currentColor" strokeWidth="1">
        <path
          d="M87.5,175 C135.824916,175 175,135.824916 175,87.5 C175,39.1750844 135.824916,-5.68434189e-14 87.5,-5.68434189e-14 C39.1750844,-5.68434189e-14 -5.68434189e-14,39.1750844 -5.68434189e-14,87.5 C-5.68434189e-14,135.824916 39.1750844,175 87.5,175 Z"
          fill="none"
          strokeLinecap="round"
          opacity="0.5"
          transform="translate(87, 87) scale(-1, 1) translate(-87, -87) "
        />
        <path
          d="M60.6511628,60.6511628 L115.109738,115.109738"
          strokeLinecap="square"
        />
        <path
          d="M60.6511628,60.6511628 L115.109738,115.109738"
          strokeLinecap="square"
          transform="translate(88, 88) scale(1, -1) translate(-88, -88) "
        />
      </g>
    </ErrorGraphicSVG>
  );
}

ErrorGraphic.displayName = "ErrorGraphic";

ErrorGraphic.defaultProps = {
  theme: keen
};

ErrorGraphic.propTypes = {
  orientation: PropTypes.oneOf(["vertical", "horizontal"])
};

export default ErrorGraphic;
