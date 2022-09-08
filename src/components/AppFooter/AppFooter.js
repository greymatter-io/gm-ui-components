import React from "react";
import PropTypes from "prop-types";

import { keen } from "style/theme";
import { node } from "../util/PropTypes";

import Copyright from "./components/Copyright";
import Footer from "./components/Footer";
import Links from "./components/Links";
import Link from "./components/Link";
import { IconTwitter, IconGitHub, IconLinkedIn } from "components/Glyphs";
import LongLogo from "./components/LongLogo";

import LongLogoImg from "./assets/greymatter-logo.js";
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
        href: "http://greymatter.io",
        rel: "noopener noreferrer",
        target: "_blank"
      }
    : {};

  const FooterLeftContent = () =>
    footerLeft || (
      <LongLogo {...logoProps} title="greymatter.io website">
        <LongLogoImg alt="greymatter.io Logo" />
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
          href="http://github.com/greymatter-io"
          rel="noopener noreferrer"
          target="_blank"
          title="greymatter.io Github"
        >
          <IconGitHub fillOpacity="1" strokeWidth="0" />
        </Link>
        <Link
          href="http://twitter.com/greymatterio"
          rel="noopener noreferrer"
          target="_blank"
          title="greymatter.io Twitter"
        >
          <IconTwitter fillOpacity="1" strokeWidth="0" />
        </Link>
        <Link
          href="https://www.linkedin.com/company/greymatterio"
          rel="noopener noreferrer"
          target="_blank"
          title="greymatter.io LinkedIn"
        >
          <IconLinkedIn fillOpacity="1" strokeWidth="0" />
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

AppFooter.propTypes = {
  children: node,
  copyrightText: node,
  footerCenter: node,
  footerLeft: node,
  footerRight: node,
  useExternalLinks: PropTypes.bool
};

const CURRENT_YEAR = new Date().getFullYear();

AppFooter.defaultProps = {
  copyrightText: `TM and \u00A9 ${CURRENT_YEAR} greymatter.io Inc.`,
  useExternalLinks: true,
  theme: keen
};

AppFooter.displayName = "AppFooter";

export default AppFooter;
