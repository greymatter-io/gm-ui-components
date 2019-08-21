import styled, { css } from "styled-components";
import { spacingScale } from "style/styleFunctions";
import { Graphic } from "./components/Graphic";
export const Wrap = styled.div`
  display: grid;
  grid-template-areas: "graphic body";
  align-items: center;
  justify-content: center;
  padding: ${spacingScale(2)};

  ${props =>
    props.isBlock &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      ${Graphic} {
        grid-area: graphic;
        font-size: ${spacingScale(5)};
        height: ${spacingScale(6)};
        width: ${spacingScale(6)};
      }
    `}

  ${props =>
    !props.isBlock &&
    css`
      ${Graphic} {
        font-size: ${spacingScale(2.5)};
        margin: ${spacingScale(0.25)};
      }
    `}
`;
