import styled from "styled-components";
import { PropTypes } from "prop-types";

const StyledG = styled.g.attrs({
  fill: props => props.fill
})`
  transform: scale(${props => props.ratio});
`;

StyledG.propTypes = {
  ratio: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default StyledG;
