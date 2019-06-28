import styled, { css } from "styled-components";

export const Body = styled.div`
  overflow: hidden;
  width: 100%;
  transition: all 0.5s ease;

  ${({ isOpen }) =>
    !isOpen &&
    css`
      height: 0px;
      visibility: hidden;
    `};
`;
