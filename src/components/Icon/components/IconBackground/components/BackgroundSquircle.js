import React from "react";
import { PropTypes } from "prop-types";

BackgroundSquircle.propTypes = {
  backgroundColor: PropTypes.string,
  backgroundOpacity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ratio: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

const title = "Squircle";

function BackgroundSquircle({
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
      <path
        d="M4,2 L22,2 C23.6568542,2 25,3.34314575 25,5 L25,23 C25,24.6568542 23.6568542,26 22,26 L4,26 C2.34314575,26 1,24.6568542 1,23 L1,5 C1,3.34314575 2.34314575,2 4,2 Z"
        id="Rectangle-8"
      />
    </g>
  );
}

export default BackgroundSquircle;
