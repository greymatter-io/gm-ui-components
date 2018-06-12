import styled from "styled-components";

import { spacingScale } from "style/styleFunctions";

const ReadoutItemGraph = styled.div`
  align-items: stretch;
  display: flex;
  height: ${spacingScale(4)};
  max-width: ${spacingScale(50)};
  width: 100%;

  & > svg {
    flex: 1 1 auto;
  }
`;

export default ReadoutItemGraph;
