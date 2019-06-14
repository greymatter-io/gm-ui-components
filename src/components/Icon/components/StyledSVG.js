import styled from "styled-components";
import { PropTypes } from "prop-types";
import { ICON_VIEWBOX_SIZE } from "../../../style/styleVariables";

const StyledSVG = styled.svg.attrs({
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: `0 0 ${ICON_VIEWBOX_SIZE} ${ICON_VIEWBOX_SIZE}`,
  preserveAspectRatio: "xMaxYMax meet"
})`
  z-index: 1;
  width: ${props => props.size};
  height: ${props => props.size};
  word-spacing: 0;
  vertical-align: middle;

  & > svg {
    width: 100%;
    height: 100%;
  }

  &:not(:root) {
    overflow: visible;
  }

  * {
    vector-effect: non-scaling-stroke;
  }

  *[class*="border"] {
    stroke-width: ${props => props.borderWidth};
    stroke: ${props => props.borderColor};
    fill: none;
  }

  *[class*="fill"] {
    fill: ${props => props.fillColor};
    fill-opacity: ${props => props.fillOpacity};
    stroke: none;
  }
`;

StyledSVG.propTypes = {
  borderColor: PropTypes.string,
  borderWidth: PropTypes.string,
  fillColor: PropTypes.string,
  fillOpacity: PropTypes.string,
  size: PropTypes.string
};

StyledSVG.defaultProps = {
  borderColor: "currentColor",
  borderWidth: "1px",
  fillColor: "currentColor",
  fillOpacity: "0.15",
  size: "1.714em"
};

export default StyledSVG;
