import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { spacingScale } from "style/styleFunctions";
import { keen } from "style/styleVariables";

export const Breadcrumb = styled.li`
  flex: 0 1 auto;
  overflow: hidden;
  min-width: 2.5em;
  max-width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  transition: all 0.3s ease;

  &:hover,
  &:focus {
    flex-shrink: 0;
  }

  &:before {
    display: inline-block;
    opacity: ${props => (props.hideDelimiter ? 0 : props.theme.OPACITY_50)};
    padding: 0 ${spacingScale(0.5)};
    content: ">";
    transform: scaleX(0.5);
  }

  > * {
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

Breadcrumb.defaultProps = {
  theme: keen
};

/**
 * Stateless functional React component that renders an individual breadcrumb item
 * @returns JSX.Element
 */

export default function BreadcrumbItem({ item }) {
  return <Breadcrumb>{item}</Breadcrumb>;
}

BreadcrumbItem.propTypes = {
  expand: PropTypes.func,
  item: PropTypes.string.isRequired
};
