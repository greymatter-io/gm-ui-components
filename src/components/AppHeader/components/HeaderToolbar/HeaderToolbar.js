import { PropTypes } from "prop-types";
import React from "react";

import HeaderBreadcrumbs from "./components/HeaderBreadcrumbs";
import HeaderToolbarWrapper from "./components/HeaderToolbarWrapper";
import SkipNav from "./components/SkipNav";

HeaderToolbar.propTypes = {
  breadcrumbs: PropTypes.array,
  skipToId: PropTypes.string,
  toolbarItems: PropTypes.func
};

/**
 * Stateless functional React component that renders the bar at top of main content with breadcrumbs represending client routing and a link to settings
 * @param {Object} props - See propTypes
 * @returns JSX.Element
 */
function HeaderToolbar({ breadcrumbs, toolbarItems, skipToId }) {
  return (
    <HeaderToolbarWrapper>
      <SkipNav type="button" skipToId={skipToId}>
        Skip Navigation
      </SkipNav>
      <HeaderBreadcrumbs crumbs={breadcrumbs} />
      {typeof toolbarItems === "function" && toolbarItems()}
    </HeaderToolbarWrapper>
  );
}

export default HeaderToolbar;
