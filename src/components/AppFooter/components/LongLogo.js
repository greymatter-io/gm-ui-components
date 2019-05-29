import styled from "styled-components";
import { spacingScale } from "../../../style/styleFunctions";
import { keen } from "style/styleVariables";

const LongLogo = styled.a`
  padding: 0 ${spacingScale(1)};
  color: ${props => props.theme.COLOR_CONTENT};
  opacity: ${props => props.theme.OPACITY_70};
  flex: 0 1 auto;
  text-align: left;
  transition: all 0.2s ease;
  filter: grayscale(100%);

  &:hover {
    opacity: ${props => props.theme.OPACITY_100};
    color: ${props => props.theme.COLOR_CONTENT};
    transition: all 0.2s ease;
    filter: grayscale(0%);
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
