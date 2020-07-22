import styled, { css } from "styled-components";
import { Graphic } from "./Graphic";

export const Wrap = styled.div`
  display: grid;
  grid-template-areas: "graphic body";
  align-items: center;
  justify-content: center;
  padding: 2rem;

  ${props =>
    props.isBlock &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      ${Graphic} {
        grid-area: graphic;
        font-size: 5rem;
        margin: -0.5rem;
      }
    `}

  ${props =>
    !props.isBlock &&
    css`
      ${Graphic} {
        font-size: 2.5rem;
        margin: 0.25rem;
      }
    `}
`;
