import styled from "styled-components";
import { spacingScale } from "../../../style/styleFunctions";
import { keen } from "style/theme";

const LongLogo = styled.a`
  padding: 0 ${spacingScale(1)};
  opacity: ${props => props.theme.OPACITY_70};
  flex: 0 1 auto;
  text-align: left;
  transition: all 0.2s ease;
  filter: grayscale(100%);

  &:hover {
    opacity: ${props => props.theme.OPACITY_100};
    transition: all 0.2s ease;
    filter: grayscale(0%);
  }

  img {
    max-width: 140px; /* Magic number tied to image size */
    vertical-align: -3px;
  }
`;

LongLogo.defaultProps = {
  theme: keen
};

export default LongLogo;
