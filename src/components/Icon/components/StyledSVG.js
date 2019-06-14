import styled from "styled-components";

const StyledSVG = styled.svg.attrs({
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: `0 0 64 64`,
  preserveAspectRatio: "xMaxYMax meet"
})`
  z-index: 1;
  width: ${props => props.size};
  height: ${props => props.size};
  word-spacing: 0;
  vertical-align: middle;
  overflow: visible;

  & > g > svg {
    width: 100%;
    height: 100%;
    overflow: visible;
  }

  * {
    vector-effect: non-scaling-stroke;
  }

  *[class*="border"] {
    stroke-width: ${props => props.borderWidth};
    stroke-opacity: ${props => props.borderOpacity};
    stroke: ${props => props.borderColor};
    fill: none;
  }

  *[class*="fill"] {
    fill: ${props => props.fillColor};
    fill-opacity: ${props => props.fillOpacity};
    stroke: none;
  }

  *:not([class*="fill"]):not([class*="border"]) {
    fill: ${props => props.fillColor};
    fill-opacity: ${props => props.fillOpacity};
    stroke-width: ${props => props.borderWidth};
    stroke-opacity: ${props => props.borderOpacity};
    stroke: ${props => props.borderColor};
  }
`;

export default StyledSVG;
