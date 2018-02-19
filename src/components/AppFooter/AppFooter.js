import React from "react";
import styled from "styled-components";
import { decipher } from "../../style/styleVariables";
import longLogo from "../../images/decipher-logo-long.png";
import github from "../../images/icons/github.svg";
import twitter from "../../images/icons/twitter.svg";
import linkedin from "../../images/icons/linkedin.svg";

const theme = decipher;

export const Wrapper = styled.footer`
  color: ${theme.colorContent};
  content: ${theme.colorContent};
  font-size: ${theme.fontSizeSm};
  flex: 0 0 ${parseInt(theme.spacing, 10) * 4}px;
  padding: ${parseInt(theme.spacing, 10) * .5}px;
  opacity: .8;
  user-select: none;
  overflow: hidden;
  flex-direction: row;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

export const LongLogo = styled.a`
  padding: 0 ${theme.spacing};
  content: ${theme.colorContent};
  transition: ${theme.transitionNormal};
  flex: 0 1 auto;
  text-align: left;
  filter: grayscale(100%);

  &:hover {
    filter: grayscale(0%);
  }

  img {
    max-width: 157px;
  }
`;

export const Copyright = styled.p`
  transition: ${theme.transitionNormal};
  content: ${theme.colorContent};
  margin: 0;
  text-transform: uppercase;
  flex: 1 1 100%;
  letter-spacing: 0.03em;
  text-align: center;
  cursor: default;
  z-index: -1;
  @media all and (max-width: 600px) {
    display: none;
  }
`;

export const Links = styled.div`
  padding: 0 0 0 ${theme.spacing};
  content: ${theme.colorContent};
  flex: 0 0 auto;
  text-align: right;
`;

export const Link = styled.a`
  padding: 0 ${theme.spacing};
  content: ${theme.colorContent};
`;

export const Social = styled.img`
  width: ${parseInt(theme.spacing, 10) * 2}px;
  transition: ${theme.transitionNormal};

  &:hover {
    opacity: 1;
  }
`;

/**
 * Stateless functional React component that renders company branding and social media footer content
 * @returns JSX.Element
 */
export default function AppFooter() {
  return (
    <Wrapper>
      <LongLogo
        href="http://deciphernow.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img alt="Decipher Technology Studios" src={longLogo} />
      </LongLogo>
      <Copyright>&copy;2017 Decipher Technology Studios</Copyright>
      <Links>
        <Link
          href="http://github.com/DecipherNow"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Social alt="GitHub" src={github} />
        </Link>
        <Link
          href="http://twitter.com/deciphernow"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Social alt="Twitter" src={twitter} />
        </Link>
        <Link
          href="http://www.linkedin.com/company/decipher-technology-studios"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Social alt="LinkedIn" src={linkedin} />
        </Link>
      </Links>
    </Wrapper>
  );
}
