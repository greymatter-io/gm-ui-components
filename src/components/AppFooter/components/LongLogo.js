import styled from "styled-components";
import { spacingScale } from "../../../style/styleFunctions";
import { OPACITY_70, OPACITY_100 } from "style/styleVariables";

const LongLogo = styled.a`
  padding: 0 ${spacingScale(1)};
  opacity: ${OPACITY_70};
  flex: 0 1 auto;
  text-align: left;
  transition: all 0.2s ease;
  filter: grayscale(100%);

  &:hover {
    opacity: ${OPACITY_100};
    transition: all 0.2s ease;
    filter: grayscale(0%);
  }
  
  img {
    max-width: 140px; /* Magic number tied to image size */
    vertical-align: -3px;
  }
`;

export default LongLogo;
