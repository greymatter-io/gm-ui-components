import React from "react";
import PropTypes from "prop-types";

import HeaderWrapper from "./components/HeaderWrapper";
import HeaderToolbar from "./components/HeaderToolbar";
import HeaderBanner from "./components/HeaderBanner";

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

AppHeader.propTypes = {
  extras: PropTypes.array,
  title: PropTypes.string.isRequired,
  toolbarItems: PropTypes.func
};

AppHeader.displayName = "AppHeader";

export default AppHeader;
