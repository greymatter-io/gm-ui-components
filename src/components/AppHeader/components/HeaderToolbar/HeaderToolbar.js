import { PropTypes } from "prop-types";
import React from "react";

import HeaderToolbarWrapper from "./components/HeaderToolbarWrapper";

HeaderToolbar.propTypes = {
  toolbarItems: PropTypes.func
};

/**
 * Stateless functional React component that renders the bar at top of main content with breadcrumbs represending client routing and a link to settings
 * @param {Object} props - See propTypes
 * @returns JSX.Element
 */
function HeaderToolbar({ toolbarItems }) {
  return (
    <HeaderToolbarWrapper>
      {typeof toolbarItems === "function" && toolbarItems()}
    </HeaderToolbarWrapper>
  );
}

export default HeaderToolbar;
