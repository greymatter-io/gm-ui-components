import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { keen } from "style/theme";
import { IconX } from "components/Glyphs";

const InputReset = ({ visible = false, onClick }) => {
  return (
    <Button visible={visible} onClick={onClick}>
      <IconX />
    </Button>
  );
};

const Button = styled.button`
  visibility: ${props => (props.visible === true ? "visible" : "hidden")};
  opacity: ${props => (props.visible === true ? "1" : "0")};
  transition: opacity 0.25s ease;
  position: absolute;
  padding: 0;
  background: inherit;
  border: none;
  border-radius: ${({ theme }) => theme.CORNER_RADIUS_INPUT};
  color: inherit;
  font-size: ${({ theme }) => theme.FONT_SIZE_TEXT_SM};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT_BOLD};
  z-index: 1;
  cursor: pointer;
`;

InputReset.propTypes = {
  onClick: PropTypes.func,
  visible: PropTypes.bool
};

InputReset.defaultProps = {
  theme: keen
};

export default InputReset;
