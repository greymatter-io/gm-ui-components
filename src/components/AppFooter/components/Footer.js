import styled from "styled-components";
import { keen } from "style/styleVariables";
import { spacingScale } from "style/styleFunctions";

const Footer = styled.footer`
  user-select: none;
  overflow: hidden;
  padding: 0 ${spacingScale(0.5)};
  font-family: ${props => props.theme.FONT_STACK_BASE};
  display: flex;
  flex-flow: row wrap;
  color: ${props => props.theme.COLOR_CONTENT};
  background: ${props => props.theme.COLOR_BACKGROUND_A};
  font-size: ${props => props.theme.FONT_SIZE_BASE};
  height: auto;
  min-height: ${spacingScale(4)};
  align-items: stretch;
  justify-content: space-between;

  @media all and (min-width: 800px) {
    height: ${spacingScale(5)};
    flex-wrap: no-wrap;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: ${props => props.theme.ZINDEX_STICKY};

    & + * {
      padding-bottom: ${spacingScale(4)};
    }
  }
`;

Footer.defaultProps = {
  theme: keen
};

export default Footer;
