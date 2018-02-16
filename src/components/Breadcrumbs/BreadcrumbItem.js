import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { decipher } from "../../style/styleVariables";

const theme = decipher;

export const Breadcrumb = styled.li`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  color: black;
  &:before {
    content: ">";
    transform: scaleX(0.5);
    display: flex;
    opacity: 0.5;
    padding: 0 ${parseInt(theme.spacing, 10) * .5}px;
  }
  a {
    display: flex;
    max-width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding: ${theme.spacing} 0;
    color: inherit;
    text-decoration: none;
    &:hover {
      color: black;
    }
  }
  &:first-child {
    &:before {
      content: none;
    }
    a {
      padding-left: ${parseInt(theme.spacing, 10) * 2}px;
    }
  }
`;

/**
 * Stateless functional React component that renders an individual breadcrumb item
 * @returns JSX.Element
 */

export default function BreadcrumbItem({ item, expand }) {
  return (
    <Breadcrumb
      onClick={() => {
        if (item === "...") expand();
      }}
    >
      {item.length > 20 ? item.substr(0, 20).concat("...") : item}
    </Breadcrumb>
  );
}

BreadcrumbItem.propTypes = {
  expand: PropTypes.func,
  item: PropTypes.string.isRequired
};
