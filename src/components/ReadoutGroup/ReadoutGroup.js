import styled from "styled-components";

import { spacingScale } from "style/styleFunctions";
import { keen } from "style/theme";

const ReadoutGroup = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  orphans: 2;
  margin-right: -${spacingScale(1)};
  flex: 1 1 100%;
`;

export default ReadoutGroup;
