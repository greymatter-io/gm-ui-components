import { PropTypes } from "prop-types";
import React, { Fragment } from "react";

import { keenDark } from "style/styleVariables";

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
    <HeaderContainer theme={keenDark}>
      <Header theme={keenDark}>{title || "—"}</Header>
      {extras && (
        <Fragment>
          {extras.map(extra => (
            <Extra
              href={extra.path}
              key={extra.title}
              target="_blank"
              theme={keenDark}
            >
              {extra.title}
            </Extra>
          ))}
        </Fragment>
      )}
    </HeaderContainer>
  );
}

export default HeaderBanner;
