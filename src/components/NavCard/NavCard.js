import React from "react";
import { PropTypes } from "prop-types";

import NavCardTitle from "./components/NavCardTitle";
import NavCardDetails from "./components/NavCardDetails";
import NavCardKey from "./components/NavCardKey";
import NavCardVal from "./components/NavCardVal";
import NavCardIcon from "./components/NavCardIcon";
import NavCardLink from "./components/NavCardLink";

NavCard.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.string,
    PropTypes.array,
    PropTypes.number,
    PropTypes.object
  ]),
  details: PropTypes.array,
  href: PropTypes.string,
  icon: PropTypes.func,
  tabKey: PropTypes.string,
  title: PropTypes.string
};

/**
 * Stateless functional React component that renders the navigation tabs in Header
 * @param {Object[]} props - See propTypes
 * @returns JSX.Element
 */
function NavCard({ href, icon, tabKey, details = [], title, children }) {
  return (
    <NavCardLink to={href} data-key={tabKey}>
      <NavCardTitle>
        {typeof icon === "function" && <NavCardIcon>{icon()}</NavCardIcon>}
        <h1>{title}</h1>
      </NavCardTitle>
      {details.map(item => {
        return (
          <NavCardDetails key={item.name}>
            <NavCardKey>{item.name}</NavCardKey>
            <NavCardVal>{item.value}</NavCardVal>
          </NavCardDetails>
        );
      })}
      {children}
    </NavCardLink>
  );
}

export default NavCard;
