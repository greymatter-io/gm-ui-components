import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

export const Breadcrumb = styled.li`
  flex: 0 1 100%;
  display: flex;
  max-width: fit-content;
  overflow: hidden;

  &:before {
    content: ">";
    transform: scaleX(0.5);
    opacity: ${props => (props.hideDelimiter ? 0 : 0.5)};
    padding: 0 4px;
  }
  a {
    white-space: nowrap;
    text-overflow: ellipsis;
    color: inherit;
  }
  &:first-child {
    &:before {
      content: none;
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
