import React from "react";
import { PropTypes } from "prop-types";

BackgroundTriangle.propTypes = {
  backgroundColor: PropTypes.string,
  backgroundOpacity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ratio: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

const title = "Square";

function BackgroundTriangle({
  ratio = 1,
  backgroundColor = "transparent",
  backgroundOpacity = "1"
}) {
  return (
    <g
      id={title}
      className="iconBackground"
      fillOpacity={backgroundOpacity}
      fill={backgroundColor}
      fillRule="evenodd"
    >
      <polygon id="Triangle-6" points="12 1 24 20 0 20" />
    </g>
  );
}

export default BackgroundTriangle;
