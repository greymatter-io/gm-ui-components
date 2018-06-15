import React from "react";
import { PropTypes } from "prop-types";

import BackgroundSquare from "./components/BackgroundSquare";
import BackgroundSquareBeveled from "./components/BackgroundSquareBeveled";
import BackgroundSquareRounded from "./components/BackgroundSquareRounded";
import BackgroundSquareRoundedSmooth from "./components/BackgroundSquareRoundedSmooth";
import BackgroundTriangle from "./components/BackgroundTriangle";
import BackgroundCircleSmall from "./components/BackgroundCircleSmall";
import BackgroundTriangleSmall from "./components/BackgroundTriangleSmall";
import BackgroundSquareSmall from "./components/BackgroundSquareSmall";

// import all icon components
const backgroundStyles = {
  BackgroundCircleSmall,
  BackgroundSquareSmall,
  BackgroundTriangleSmall,
  BackgroundSquare,
  BackgroundSquareBeveled,
  BackgroundSquareRounded,
  BackgroundSquareRoundedSmooth,
  BackgroundTriangle
};

IconBackground.propTypes = {
  backgroundColor: PropTypes.string,
  backgroundOpacity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  borderColor: PropTypes.string,
  borderOpacity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  borderWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string
};

IconBackground.defaultProps = {
  backgroundColor: "red",
  backgroundOpacity: "1",
  borderColor: "currentColor",
  borderOpacity: "1",
  borderWidth: "1",
  name: "BackgroundSquare"
};

export default function IconBackground({
  backgroundColor,
  backgroundOpacity,
  borderColor,
  borderOpacity,
  borderWidth,
  name
}) {
  // dynamically render glyph component by name
  const IconBackgroundComponent = backgroundStyles[name];
  return (
    <g
      id={name}
      className="iconBackground"
      fillOpacity={backgroundOpacity}
      fill={backgroundColor}
      stroke={borderColor}
      strokeOpacity={borderOpacity}
      strokeWidth={borderWidth}
    >
      {IconBackgroundComponent && <IconBackgroundComponent />}
    </g>
  );
}

IconBackground.displayName = "IconBackground";
