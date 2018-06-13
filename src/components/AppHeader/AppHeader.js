import React from "react";
import PropTypes from "prop-types";

import HeaderWrapper from "./components/HeaderWrapper";
import HeaderToolbar from "./components/HeaderToolbar";
import HeaderBanner from "./components/HeaderBanner";

AppHeader.propTypes = {
  breadcrumbs: PropTypes.array.isRequired,
  extras: PropTypes.array,
  title: PropTypes.string.isRequired,
  toolbarItems: PropTypes.func
};

/**
 * Stateless functional React component that renders the App Header
 * @returns JSX.Element
 */

function AppHeader({ title, extras, breadcrumbs, toolbarItems }) {
  return (
    <HeaderWrapper>
      <HeaderToolbar breadcrumbs={breadcrumbs} toolbarItems={toolbarItems} />
      <HeaderBanner title={title} extras={extras} />
    </HeaderWrapper>
  );
}

export default AppHeader;
