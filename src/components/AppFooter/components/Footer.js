import styled from "styled-components";
import { keen } from "style/theme";

const Footer = styled.footer`
  user-select: none;
  overflow: hidden;
  padding: 0 0.5rem;
  font-family: ${({ theme }) => theme.FONT_STACK_DEFAULT};
  display: flex;
  flex-flow: row wrap;
  color: ${({ theme }) => theme.COLOR_CONTENT_DEFAULT};
  background: ${({ theme }) => theme.COLOR_BACKGROUND_DEFAULT};
  font-size: ${({ theme }) => theme.FONT_SIZE_TEXT_DEFAULT};
  height: auto;
  min-height: 4rem;
  align-items: stretch;
  justify-content: space-between;

  @media all and (min-width: 800px) {
    height: 5rem;
    flex-wrap: no-wrap;
    align-items: center;
    justify-self: stretch;

    & + * {
      padding-bottom: 4rem;
    }
  }
`;

Footer.defaultProps = {
  theme: keen
};

export default Footer;
