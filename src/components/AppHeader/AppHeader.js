import React from "react";
import PropTypes from "prop-types";

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
    <HeaderWrapper {...props}>
      <HeaderToolbar toolbarItems={toolbarItems} />
      <HeaderBanner title={title} extras={extras} />
    </HeaderWrapper>
  );
}

AppHeader.displayName = "AppHeader";

export default AppHeader;
