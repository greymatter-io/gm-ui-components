import React from "react";
import PropTypes from "prop-types";

import { keenDark } from "style/styleVariables";

import HeaderWrapper from "./components/HeaderWrapper";
import HeaderToolbar from "./components/HeaderToolbar";
import HeaderBanner from "./components/HeaderBanner";

AppHeader.propTypes = {
  extras: PropTypes.array,
  title: PropTypes.string.isRequired,
  toolbarItems: PropTypes.func
};

/**
 * Stateless functional React component that renders the App Header
 * @returns JSX.Element
 */

function AppHeader({ title, extras = [], toolbarItems, ...props }) {
  return (
    <HeaderWrapper {...props} theme={keenDark}>
      <HeaderToolbar toolbarItems={toolbarItems} theme={keenDark} />
      <HeaderBanner title={title} extras={extras} theme={keenDark} />
    </HeaderWrapper>
  );
}

AppHeader.displayName = "AppHeader";

export default AppHeader;
