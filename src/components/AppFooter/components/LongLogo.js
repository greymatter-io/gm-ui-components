import styled from "styled-components";
import { spacingScale } from "../../../style/styleFunctions";
import { keen } from "style/theme";

const LongLogo = styled.a`
  padding: 0 ${spacingScale(1)};
  color: ${props => props.theme.COLOR_CONTENT_MUTED};
  flex: 0 1 auto;
  transition: all 0.2s ease;

  &:hover {
    color: ${props => props.theme.COLOR_CONTENT_CONTRAST};
  }

  svg {
    max-width: 142px; /* Magic number that optimizes for preferable antialiasing */
    height: auto;
    width: 100%;
  }
`;

LongLogo.defaultProps = {
  theme: keen
};

export default LongLogo;
