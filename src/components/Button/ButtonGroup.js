import styled from "styled-components";
import { PropTypes } from "prop-types";

import { spacingScale } from "style/styleFunctions";

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  * + * {
    margin-left: ${spacingScale(0.5)};
  }
  ${props =>
    props.toolbar ? `padding: ${spacingScale(0)} ${spacingScale(1)};` : ""};
`;

ButtonGroup.propTypes = {
  toolbar: PropTypes.bool
};

export default ButtonGroup;
