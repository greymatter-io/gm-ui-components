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
