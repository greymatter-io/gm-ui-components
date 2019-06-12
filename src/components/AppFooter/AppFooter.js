import React from "react";
import PropTypes from "prop-types";

import { keen } from "style/theme";

import Copyright from "./components/Copyright";
import Footer from "./components/Footer";
import Links from "./components/Links";
import Link from "./components/Link";
import { IconTwitter, IconGitHub, IconLinkedIn } from "components/Glyphs";
import LongLogo from "./components/LongLogo";
import { keen } from "style/theme";

import LongLogoImg from "./assets/decipher-logo-rgb-left.js";

/**
 * Stateless functional React component that renders company branding and social media footer content
 * @returns JSX.Element
 */
function AppFooter({
  copyrightText,
  useExternalLinks,
  footerLeft,
  footerCenter,
  footerRight,
  children,
  ...props
}) {
  const logoProps = useExternalLinks
    ? {
        href: "http://deciphernow.com",
        rel: "noopener noreferrer",
        target: "_blank"
      }
    : {};

  const FooterLeftContent = () =>
    footerLeft || (
      <LongLogo {...logoProps} title="Decipher Technology Studios website">
        <LongLogoImg alt="Decipher Technology Studios Logo" />
      </LongLogo>
    );

  const FooterCenterContent = () =>
    footerCenter || (
      <Copyright useExternalLinks={useExternalLinks}>{copyrightText}</Copyright>
    );

  const FooterRightContent = () =>
    footerRight ||
    (useExternalLinks && (
      <Links>
        <Link
          href="http://github.com/DecipherNow"
          rel="noopener noreferrer"
          target="_blank"
          title="Decipher Technology Studios Github"
        >
          <IconGitHub size="20px" />
        </Link>
        <Link
          href="http://twitter.com/deciphernow"
          rel="noopener noreferrer"
          target="_blank"
          title="Decipher Technology Studios Twitter"
        >
          <IconTwitter size="20px" />
        </Link>
        <Link
          href="http://www.linkedin.com/company/decipher-technology-studios"
          rel="noopener noreferrer"
          target="_blank"
          title="Decipher Technology Studios LinkedIn"
        >
          <IconLinkedIn size="20px" />
        </Link>
      </Links>
    ));

  const footerContent = children || (
    <>
      <FooterLeftContent />
      <FooterCenterContent />
      <FooterRightContent />
    </>
  );

  return <Footer {...props}>{footerContent}</Footer>;
}

const nodePropType = PropTypes.oneOfType([
  PropTypes.element,
  PropTypes.node,
  PropTypes.string
]);

AppFooter.propTypes = {
  children: nodePropType,
  copyrightText: nodePropType,
  footerCenter: nodePropType,
  footerLeft: nodePropType,
  footerRight: nodePropType,
  useExternalLinks: PropTypes.bool
};

AppFooter.defaultProps = {
  copyrightText: "TM and \u00A9 2019 Decipher Technology Studios",
  useExternalLinks: true,
  footerCenter: null,
  footerLeft: null,
  footerRight: null,
  theme: keen
};

AppFooter.displayName = "AppFooter";

export default AppFooter;
