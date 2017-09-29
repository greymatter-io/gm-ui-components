import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

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
    padding: 0 4px;
  }
  a {
    display: flex;
    max-width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding: 8px 0;
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
      padding-left: 16px;
    }
  }
`;

/**
 * Stateless functional React component that renders an individual breadcrumb item
 * @returns JSX.Element
 */

export default function BreadcrumbItem({ children }) {
  return (
    <Breadcrumb>
      {children.length > 20 ? children.substr(0, 20).concat("...") : children}
    </Breadcrumb>
  );
}

BreadcrumbItem.propTypes = {
  children: PropTypes.string.isRequired
};
