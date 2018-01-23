import React, { Component } from "react";
import { PropTypes } from "prop-types";
import _ from "lodash";
import { ICON_VIEWBOX_SIZE } from "../../../../style/sizeVariables";

/**
 * returns Glyph by pass glyph name or empty <g> element if not found
 *
 * @export class Glyph
 * @class Glyph
 * @extends {Component}
 */
export default class Glyph extends Component {
  static propTypes = {
    glyphColor: PropTypes.string,
    name: PropTypes.string,
    ratio: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  };

  state = {};

  componentDidMount() {
    let { name } = this.props;
    name = _.upperFirst(name);
    import(`./components/${name}`)
      .then(glyph => this.setState({ glyph: glyph }))
      .catch(err =>
        console.error(`${name} could not be found in the glyph adapter`, err)
      );
  }

  render() {
    let { name, ratio, glyphColor } = this.props;
    // use upperFirst instead of capitalize to respect camelCase
    // console.log(this.state);
    // dynamically render glyph component by name
    const GlyphComponent = this.state.glyph;
    const viewBoxSize = ICON_VIEWBOX_SIZE;
    const glyphTranslateDist = (ratio - 1) * (0.5 * viewBoxSize) * -1;

    return (
      <g
        fill={glyphColor}
        transform={
          "translate(" +
          glyphTranslateDist +
          " " +
          glyphTranslateDist +
          ") scale(" +
          ratio +
          ")"
        }
      >
        {GlyphComponent && <GlyphComponent />}
      </g>
    );
  }
}

Glyph.defaultProps = {
  ratio: 1,
  glyphColor: "currentColor"
};
