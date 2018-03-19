import styled from "styled-components";

import { COLOR_CONTENT_BACKGROUND } from "../../../style/styleVariables";
import { spacingScale, contrastColor } from "../../../style/styleFunctions";

const Copyright = styled.p`
  font-size: 50%;
  margin: 0;
  flex: 0 0 100%;
  text-align: center;
  transition: opacity 0.2s ease;
  cursor: default;
  border-top: 1px solid ${contrastColor(COLOR_CONTENT_BACKGROUND.toString(), 0.1)};
  margin-top: ${spacingScale(1)};
  padding: ${spacingScale(1)};
  text-transform: uppercase;
  order: 3;

  @media all and (min-width: 800px) {
    order: initial;
    flex: 1 1 auto;
    padding: 0;
    margin: 0;
    border: none;
  }
`;

export default Copyright;
