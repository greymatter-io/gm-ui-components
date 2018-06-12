import styled, { css } from "styled-components";
import { PropTypes } from "prop-types";

import { spacingScale } from "style/styleFunctions";

const ItemDisplay = styled.div`
  position: relative;
  padding: ${spacingScale(1)};

  button {
    align-self: center;
    margin: ${spacingScale(1)} 0;
  }

  color: ${props => props.color};
  ${props =>
    props.flex &&
    css`
      flex: ${props => props.flex};
    `};
`;

ItemDisplay.propTypes = {
  color: PropTypes.string,
  flex: PropTypes.string
};

export default ItemDisplay;
