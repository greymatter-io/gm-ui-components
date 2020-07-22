import styled from "styled-components";

import { keen } from "style/theme";

const NavCardKey = styled.dt`
  color: ${({ theme }) => theme.COLOR_CONTENT_MUTED};
  padding-right: 1rem;
  display: inline-block;
`;

NavCardKey.defaultProps = {
  theme: keen
};

export default NavCardKey;
