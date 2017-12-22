import React, { Component } from "react";
import { PropTypes } from "prop-types";

import BorderSquare from "./components/BorderSquare";
import BorderCircleSmall from "./components/BorderCircleSmall";
import BorderSquareSmall from "./components/BorderSquareSmall";
import BorderTriangleSmall from "./components/BorderTriangleSmall";

// import all icon Border components
const borderStyles = {
  BorderSquare,
  BorderSquareSmall,
  BorderTriangleSmall,
  BorderCircleSmall
};

export default class IconBorder extends Component {
  static propTypes = {
    borderColor: PropTypes.string,
    borderOpacity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    borderWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string,
    ratio: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  };

  components = {
    name: this.props.name
  };

  render() {
    const { ratio, name, borderColor, borderOpacity, borderWidth } = this.props;

    // dynamically render glyph component by name
    const IconBorderComponent = borderStyles[name];
    return (
      <g
        id={name}
        className="iconBorder"
        stroke={borderColor}
        strokeOpacity={borderOpacity}
        strokeWidth={borderWidth / ratio}
        fill="transparent"
      >
        <IconBorderComponent name={name} />
      </g>
    );
  }
}

IconBorder.defaultProps = {
  ratio: 1,
  borderColor: "transparent",
  borderOpacity: 1,
  borderWidth: 1,
  name: "BorderSquare"
};
