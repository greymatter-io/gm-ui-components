import { PropTypes } from "prop-types";

export const node = PropTypes.oneOfType([
  PropTypes.element,
  PropTypes.node,
  PropTypes.string
]);
