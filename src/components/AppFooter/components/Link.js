import styled from "styled-components";
import { keen } from "style/theme";
import { spacingScale } from "style/styleFunctions";

const Link = styled.a`
  color: ${props => props.theme.COLOR_CONTENT_MUTED};
  padding: 0 ${spacingScale(0.5)};

  &:hover {
    color: ${props => props.theme.COLOR_CONTENT_CONTRAST};
  }

  svg {
    height: ${spacingScale(2.25)};
  }
`;

Link.defaultProps = {
  theme: keen
};

export default Link;
