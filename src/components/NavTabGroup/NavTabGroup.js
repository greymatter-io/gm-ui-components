import React from "react";
import styled from "styled-components";
import { PropTypes } from "prop-types";
import { PADDING_BASE } from "../../style/styleVariables";


const NavTabGroupWrap = styled.nav.attrs({
}) `
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: center;
`;

const NavTabGroupLabel = styled.p`
  padding: 0 ${PADDING_BASE}px;
`;

const NavTabGroup = ({ label, children }) => {
  return (
    <NavTabGroupWrap>
      <NavTabGroupLabel>{label}</NavTabGroupLabel>
      {children}
    </NavTabGroupWrap>
  );
};

NavTabGroup.propTypes = {
  children: PropTypes.array,
  label: PropTypes.string
};

export default NavTabGroup;