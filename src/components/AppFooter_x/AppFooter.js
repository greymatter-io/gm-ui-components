import { FormattedHTMLMessage } from "react-intl";
import React from "react";
import FooterCopyright from "./components/FooterCopyright";
import FooterWrapper from "./components/FooterWrapper";
import FooterLongLogo from "./components/FooterLongLogo";
import FooterLinks from "./components/FooterLinks";

import ExternalLink from "components/ExternalLink";
import Icon from "components/Icon";
import Glyph from "components/Glyphs";

import longLogo from "./assets/decipher-logo-long.png";

/**
 * Stateless functional React component that renders company branding and social media footer content
 * @returns JSX.Element
 */
export default function Footer() {
  return (
    <FooterWrapper>
      <FooterLongLogo
        href="http://deciphernow.com"
        rel="noopener noreferrer"
        target="_blank"
        title="Decipher Technology Studios website"
      >
        <img alt="Decipher Technology Studios" src={longLogo} />
      </FooterLongLogo>
      <FooterCopyright>
        <FormattedHTMLMessage
          id="footer.copyright"
          defaultMessage="Copyright &copy; 2018 Decipher Technology Studios. All rights reserved. 
          <br /> Copyright &copy; 2018 Grey Matter, a Decipher Technology Studios product. All
        rights reserved."
          description="Footer copyright message"
        />
      </FooterCopyright>
      <FooterLinks>
        <ExternalLink
          href="http://github.com/DecipherNow"
          rel="noopener noreferrer"
          target="_blank"
          title="Decipher Technology Studios Github"
        >
          <Icon iconRatio={0.8}>
            <Glyph name="GitHub" />
          </Icon>
        </ExternalLink>
        <ExternalLink
          href="http://twitter.com/deciphernow"
          rel="noopener noreferrer"
          target="_blank"
          title="Decipher Technology Studios Twitter"
        >
          <Icon iconRatio={0.8}>
            <Glyph name="Twitter" />
          </Icon>
        </ExternalLink>
        <ExternalLink
          href="http://www.linkedin.com/company/decipher-technology-studios"
          rel="noopener noreferrer"
          target="_blank"
          title="Decipher Technology Studios LinkedIn"
        >
          <Icon iconRatio={0.8}>
            <Glyph name="LinkedIn" />
          </Icon>
        </ExternalLink>
      </FooterLinks>
    </FooterWrapper>
  );
}
