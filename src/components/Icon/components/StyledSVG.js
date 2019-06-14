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

  .glyph > svg {
    width: 100%;
    height: 100%;
    overflow: visible;
    fill: none;
    border: none;
  }

  .glyph * {
    fill: ${props => props.fillColor};
    fill-opacity: ${props => props.fillOpacity};
    stroke-width: ${props => props.borderWidth};
    stroke-opacity: ${props => props.borderOpacity};
    stroke: ${props => props.borderColor};
    vector-effect: non-scaling-stroke;
  }

  .glyph *[class*="fill"]:not([class*="border"]) {
    stroke: none;
  }

  .glyph *[class*="border"]:not([class*="fill"]) {
    fill: none;
  }
`;

export default StyledSVG;
