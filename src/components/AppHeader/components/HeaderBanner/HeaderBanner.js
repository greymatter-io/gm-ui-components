import { PropTypes } from "prop-types";
import React, { Fragment } from "react";

import HeaderContainer from "./components/HeaderContainer";
import Header from "./components/Header";
import Extra from "./components/Extra";

HeaderBanner.propTypes = {
  extras: PropTypes.array, // array of objects with a path and title key (strings)
  hideBackground: PropTypes.bool,
  title: PropTypes.string.isRequired
};

/**
 * @param {String} props - See propTypes
 * @returns JSX.Element
 */
function HeaderBanner({ title, extras }) {
  return (
    <HeaderContainer>
      <Header>{title || "—"}</Header>
      {extras && (
        <Fragment>
          {extras.map(extra => (
            <Extra href={extra.path} key={extra.title} target="_blank">
              {extra.title}
            </Extra>
          ))}
        </Fragment>
      )}
    </HeaderContainer>
  );
}

export default HeaderBanner;
