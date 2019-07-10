import styled from "styled-components";
import { keen } from "style/theme";
import { spacingScale } from "style/styleFunctions";

const Link = styled.a`
  color: ${({ theme }) => theme.COLOR_CONTENT_MUTED};
  padding: 0 ${spacingScale(0.5)};

  &:hover {
    color: ${({ theme }) => theme.COLOR_CONTENT_CONTRAST};
  }
`;

Link.defaultProps = {
  theme: keen
};

export default Link;
