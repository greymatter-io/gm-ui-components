import styled from "styled-components";
import { PropTypes } from "prop-types";
import { ICON_VIEWBOX_SIZE } from "../../../style/sizeVariables";

const StyledSVG = styled.svg.attrs({
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: `0 0 ${ICON_VIEWBOX_SIZE} ${ICON_VIEWBOX_SIZE}`
})`
  z-index: 1;
  height: ${props => props.iconRatio * ICON_VIEWBOX_SIZE}px;
  width: ${props => props.iconRatio * ICON_VIEWBOX_SIZE}px;
  word-spacing: 0;
  vertical-align: middle;

  &:not(:root) {
    overflow: visible;
  }
`;

StyledSVG.propTypes = {
  glyphColor: PropTypes.string,
  iconRatio: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default StyledSVG;
