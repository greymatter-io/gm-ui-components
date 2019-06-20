import { PropTypes } from "prop-types";

export const nodePropType = PropTypes.oneOfType([
  PropTypes.element,
  PropTypes.node,
  PropTypes.string
]);
