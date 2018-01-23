import React from "react";
import { PropTypes } from "prop-types";

BackgroundSquareBeveled.propTypes = {
  backgroundColor: PropTypes.string,
  backgroundOpacity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ratio: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

const title = "SquareBeveled";

function BackgroundSquareBeveled({
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
      <polygon
        id="Rectangle"
        points="4 0 20 0 24 4 24 20 20 24 4 24 0 20 0 4"
      />
    </g>
  );
}

export default BackgroundSquareBeveled;
