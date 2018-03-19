import styled from "styled-components";
import { spacingScale } from "../../../style/styleFunctions";

const LongLogo = styled.a`
  flex: 0 1 auto;
  text-align: left;
  padding: 0 ${spacingScale(1)};
  transition: all 0.2s ease;
  opacity: 0.8;
  filter: grayscale(100%);

  &:hover {
    opacity: 1;
    transition: all 0.2s ease;
    filter: grayscale(0%);
  }
  img {
    max-width: 157px;
  }
`;

export default LongLogo;
