import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { OPACITY_50 } from "style/styleVariables";
import { spacingScale } from "style/styleFunctions";

export const Breadcrumb = styled.li`
  flex: 0 1 auto;
  display: flex;
  overflow: hidden;
  max-width: 100%;

  &:before {
    opacity: ${props => (props.hideDelimiter ? 0 : OPACITY_50)};
    padding: 0 ${spacingScale(0.5)};
    content: ">";
    transform: scaleX(0.5);
  }

  > * {
    text-overflow: ellipsis;
    color: inherit;
    text-decoration: none;

    &:link:hover {
      text-decoration: underline;
    }
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
