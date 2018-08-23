import styled from "styled-components";
import { spacingScale } from "style/styleFunctions";

const Links = styled.div`
  flex: 1 0 auto;
  text-align: right;
  padding: 0 0 ${spacingScale(0.5)} ${spacingScale(1)};

  @media all and (min-width: 800px) {
    flex: 0 0 auto;
  }
`;

export default Links;
