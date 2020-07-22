import styled from "styled-components";
import { keen } from "style/theme";

const Link = styled.a`
  color: ${({ theme }) => theme.COLOR_CONTENT_MUTED};
  padding: 0 0.5rem;

  &:hover {
    color: ${({ theme }) => theme.COLOR_CONTENT_CONTRAST};
  }
`;

Link.defaultProps = {
  theme: keen
};

export default Link;
