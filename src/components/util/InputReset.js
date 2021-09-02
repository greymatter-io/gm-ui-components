import React from "react";
import styled from "styled-components";

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
  display: ${props => (props.visible === true ? "block" : "none")};
  position: absolute;
  padding: 0;
  background: inherit;
  border: none;
  border-radius: ${({ theme }) => theme.CORNER_RADIUS_INPUT};
  color: ${({ theme }) => theme.COLOR_BRAND_PRIMARY};
  font-size: ${({ theme }) => theme.FONT_SIZE_TEXT_SM};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT_BOLD};
  z-index: 1;
  cursor: pointer;
`;

InputReset.defaultProps = {
  theme: keen
};

export default InputReset;
