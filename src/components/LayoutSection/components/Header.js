import styled from "styled-components";

import { spacingScale } from "style/styleFunctions";

const Header = styled.header`
  align-items: center;
  display: flex;
  flex-direction: row;
  padding: 0 ${spacingScale(1)} 0;
  width: 100%;
  flex: 0 0 ${spacingScale(3)};
`;

export default Header;
