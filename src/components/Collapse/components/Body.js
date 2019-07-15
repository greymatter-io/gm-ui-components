import styled, { css } from "styled-components";

export const Body = styled.div`
  width: 100%;
  transition: all 0.5s ease;
  overflow: hidden;
  /* ${({ isOpen }) =>
    !isOpen &&
    css`
      height: 0px;
      visibility: hidden;
    `}; */
`;
