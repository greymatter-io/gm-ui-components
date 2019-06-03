import styled from "styled-components";
import { PropTypes } from "prop-types";

/* SVG_VIEWBOX is tied to the content of the SVG glyphs */
/* Modify width and height to change the size of your icon */
const SVG_VIEWBOX = "0 0 24 24";

const StyledSVG = styled.svg.attrs({
  viewBox: SVG_VIEWBOX,
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  preserveAspectRatio: "xMaxYMax meet"
})`
  z-index: 1;
  width: ${props => (props.size ? props.size : "1.714em")};
  height: ${props => (props.size ? props.size : "1.714em")};
  word-spacing: 0;
  vertical-align: middle;

  &:not(:root) {
    overflow: visible;
  }
`;

StyledSVG.propTypes = {
  size: PropTypes.string
};

export default StyledSVG;
