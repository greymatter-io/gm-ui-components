import styled from "styled-components";

import { spacingScale } from "style/styleFunctions";

export const Header = styled.div`
  cursor: pointer;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${spacingScale(1)} 0;
`;
