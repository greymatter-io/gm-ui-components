import React from "react";
import { PropTypes } from "prop-types";

import NavCardTitle from "./components/NavCardTitle";
import NavCardDetails from "./components/NavCardDetails";
import NavCardKey from "./components/NavCardKey";
import NavCardVal from "./components/NavCardVal";
import NavCardIcon from "./components/NavCardIcon";
import NavCardWrapper from "./components/NavCardWrapper";

NavCard.propTypes = {
  children: PropTypes.func,
  details: PropTypes.array,
  icon: PropTypes.func,
  title: PropTypes.string
};

/**
 * Stateless functional React component that renders the navigation tabs in Header
 * @param {Object[]} props - See propTypes
 * @returns JSX.Element
 */
function NavCard({ icon, details = [], title, children, ...props }) {
  return (
    <NavCardWrapper {...props}>
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
      {typeof children === "function" && children()}
    </NavCardWrapper>
  );
}

NavCard.displayName = "NavCard";

export default NavCard;
