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
    name = name.toLowerCase();
    import(`./components/${filenames[name]}`)
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

const filenames = {
  bars: "Bars",
  bell: "Bell",
  cpu: "CPU",
  card: "Card",
  close: "Close",
  cog: "Cog",
  configuration: "Configuration",
  httpdelete: "HttpDelete",
  docs: "Docs",
  ekg: "EKG",
  editgraph: "EditGraph",
  errorlist: "ErrorList",
  exclamation: "Exclamation",
  explorer: "Explorer",
  fabric: "Fabric",
  finagle: "Finagle",
  functions: "Functions",
  httpget: "HttpGet",
  grpc: "GRPC",
  github: "GitHub",
  go: "JVM",
  http: "Http",
  info: "Info",
  instances: "Instances",
  jvm: "JVM",
  key: "Key",
  linkedin: "LinkedIn",
  list: "List",
  memory: "Memory",
  negation: "Negation",
  nokey: "NoKey",
  nometrics: "NoMetrics",
  httppatch: "HttpPatch",
  httppost: "HttpPost",
  httpput: "HttpPut",
  pause: "Pause",
  person: "Person",
  play: "Play",
  poll: "Poll",
  power: "Power",
  rows: "Rows",
  runningsmall: "RunningSmall",
  scale: "Scale",
  scatterplot: "Scatterplot",
  service: "Service",
  serviceinstance: "ServiceInstance",
  serviceswhite: "ServicesWhite",
  starfilled: "StarFilled",
  summary: "Summary",
  tape: "Tape",
  threads: "Threads",
  timer: "Timer",
  twitter: "Twitter",
  viewcollapse: "ViewCollapse"
};
