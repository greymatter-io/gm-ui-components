import React, { Component } from "react";
import { PropTypes } from "prop-types";

import BackgroundSquare from "./components/BackgroundSquare";
import BackgroundSquareBeveled from "./components/BackgroundSquareBeveled";
import BackgroundSquareRounded from "./components/BackgroundSquareRounded";
import BackgroundSquareRoundedSmooth from "./components/BackgroundSquareRoundedSmooth";
import BackgroundTriangle from "./components/BackgroundTriangle";
import BackgroundSquircle from "./components/BackgroundSquircle";
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
  BackgroundSquircle,
  BackgroundTriangle
};

export default class IconBackground extends Component {
  static propTypes = {
    backgroundColor: PropTypes.string,
    backgroundOpacity: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    name: PropTypes.string
  };

  components = {
    name: this.props.name
  };

  render() {
    const { name, backgroundColor, backgroundOpacity } = this.props;

    // dynamically render glyph component by name
    const IconBackgroundComponent = backgroundStyles[name];
    return (
      <IconBackgroundComponent
        name={name}
        backgroundColor={backgroundColor}
        backgroundOpacity={backgroundOpacity}
      />
    );
  }
}

IconBackground.defaultProps = {
  name: "BackgroundSquare",
  backgroundColor: "red",
  backgroundOpacity: "1"
};
