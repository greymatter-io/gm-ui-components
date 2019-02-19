import styled from "styled-components";

import { COLOR_KEYLINE } from "style/styleVariables";
import { spacingScale } from "style/styleFunctions";

const Copyright = styled.p`
  font-size: 60%; /* Unique instance of font size. Do not associate with theme variable. */
  margin: 0;
  flex: 0 0 100%;
  text-align: ${props => (props.useExternalLinks ? "center" : "right")};
  transition: opacity 0.2s ease;
  cursor: default;
  border-top: 1px solid ${COLOR_KEYLINE};
  margin-top: ${spacingScale(1)};
  padding: ${spacingScale(1)};
  text-transform: uppercase;
  order: 3;
  white-space: pre-wrap;

  @media all and (min-width: 800px) {
    order: initial;
    flex: 1 1 auto;
    padding: 0;
    margin: 0;
    border: none;
  }
`;

export default Copyright;
