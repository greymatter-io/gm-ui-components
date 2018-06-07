import React from "react";
import PropTypes from "prop-types";

import Copyright from "./components/Copyright";
import Footer from "./components/Footer";
import Links from "./components/Links";
import Link from "./components/Link";
import { Twitter, GitHub, LinkedIn } from "components/Glyphs";
import LongLogo from "./components/LongLogo";

import longLogo from "./assets/decipher-logo-long.png";

AppFooter.propTypes = {
  copyrightText: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
    PropTypes.string
  ])
};

AppFooter.defaultProps = {
  copyrightText:
    "Copyright \u00A9 2018 Decipher Technology Studios. All rights reserved. \n Copyright \u00A9 2018 Grey Matter, a Decipher Technology Studios product. All rights reserved."
};

/**
 * Stateless functional React component that renders company branding and social media footer content
 * @returns JSX.Element
 */
export default function AppFooter({ copyrightText }) {
  return (
    <Footer>
      <LongLogo
        href="http://deciphernow.com"
        rel="noopener noreferrer"
        target="_blank"
        title="Decipher Technology Studios website"
      >
        <img alt="Decipher Technology Studios" src={longLogo} />
      </LongLogo>
      <Copyright> {copyrightText} </Copyright>
      <Links>
        <Link
          href="http://github.com/DecipherNow"
          rel="noopener noreferrer"
          target="_blank"
          title="Decipher Technology Studios Github"
        >
          <GitHub size="20px" />
        </Link>
        <Link
          href="http://twitter.com/deciphernow"
          rel="noopener noreferrer"
          target="_blank"
          title="Decipher Technology Studios Twitter"
        >
          <Twitter size="20px" />
        </Link>
        <Link
          href="http://www.linkedin.com/company/decipher-technology-studios"
          rel="noopener noreferrer"
          target="_blank"
          title="Decipher Technology Studios LinkedIn"
        >
          <LinkedIn size="20px" />
        </Link>
      </Links>
    </Footer>
  );
}
