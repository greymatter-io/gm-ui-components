import PropTypes from "prop-types";

// Table Shapes
export const columnItemShape = PropTypes.shape({
  title: PropTypes.string.isRequired,
  dataIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  width: PropTypes.string.isRequired
});

export const dataItemShape = PropTypes.shape({
  key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
});
