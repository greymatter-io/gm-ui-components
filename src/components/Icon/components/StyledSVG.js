import styled from "styled-components";
import { PropTypes } from "prop-types";

// const Input = styled.input.attrs(({ inputType }) => ({
//   type: inputType
// }))`

const StyledSVG = styled.svg.attrs(({ props }) => ({
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  preserveAspectRatio: "xMaxYMax meet",
  viewBox:
    "0 0 " + props.theme.SPACING_SCALE * 3 + " " + props.theme.SPACING_SCALE * 3
}))`
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
