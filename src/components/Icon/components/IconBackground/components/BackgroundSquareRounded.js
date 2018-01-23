import React from "react";
import { PropTypes } from "prop-types";

BackgroundSquareRounded.propTypes = {
  backgroundColor: PropTypes.string,
  backgroundOpacity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ratio: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

const title = "SquareRounded";

function BackgroundSquareRounded({
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
      <rect id="Rectangle" x="0" y="0" width="24" height="24" rx="4" />
    </g>
  );
}

export default BackgroundSquareRounded;
