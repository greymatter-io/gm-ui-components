import React from "react";
import { PropTypes } from "prop-types";

BackgroundSquare.propTypes = {
  backgroundColor: PropTypes.string,
  backgroundOpacity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ratio: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

const title = "Square";

function BackgroundSquare({
  ratio = 1,
  backgroundColor = "currentColor",
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
      <polygon id="Rect" points="24 0, 24 24, 0 24, 0 0" />
    </g>
  );
}

export default BackgroundSquare;
