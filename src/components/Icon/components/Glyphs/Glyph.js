import React, { Component } from "react";
import { PropTypes } from "prop-types";
import _ from "lodash";
import { ICON_VIEWBOX_SIZE } from "../../../../style/styleVariables";

import Bars from "./components/Bars";
import Bell from "./components/Bell";
import CPU from "./components/CPU";
import Card from "./components/Card";
import Close from "./components/Close";
import Cog from "./components/Cog";
import Configuration from "./components/Configuration";
import Docs from "./components/Docs";
import EKG from "./components/EKG";
import EditGraph from "./components/EditGraph";
import ErrorList from "./components/ErrorList";
import Exclamation from "./components/Exclamation";
import Explorer from "./components/Explorer";
import Fabric from "./components/Fabric";
import Finagle from "./components/Finagle";
import Functions from "./components/Functions";
import GRPC from "./components/GRPC";
import GitHub from "./components/GitHub";
import Http from "./components/Http";
import Info from "./components/Info";
import Instances from "./components/Instances";
import JVM from "./components/JVM";
import Key from "./components/Key";
import LinkedIn from "./components/LinkedIn";
import List from "./components/List";
import Memory from "./components/Memory";
import Negation from "./components/Negation";
import NoKey from "./components/NoKey";
import NoMetrics from "./components/NoMetrics";
import Pause from "./components/Pause";
import Person from "./components/Person";
import Play from "./components/Play";
import Poll from "./components/Poll";
import Power from "./components/Power";
import Rows from "./components/Rows";
import RunningSmall from "./components/RunningSmall";
import Scale from "./components/Scale";
import Scatterplot from "./components/Scatterplot";
import Service from "./components/Service";
import ServiceInstance from "./components/ServiceInstance";
import ServicesWhite from "./components/ServicesWhite";
import StarFilled from "./components/StarFilled";
import Summary from "./components/Summary";
import Tape from "./components/Tape";
import Threads from "./components/Threads";
import Timer from "./components/Timer";
import Twitter from "./components/Twitter";
import ViewCollapse from "./components/ViewCollapse";

import HTTPGet from "./components/HttpGet";
import HTTPPut from "./components/HttpPut";
import HTTPPost from "./components/HttpPost";
import HTTPPatch from "./components/HttpPatch";
import HTTPDelete from "./components/HttpDelete";

// import all glyph components

const glyphs = {
  Bars,
  Bell,
  CPU,
  Card,
  Close,
  Cog,
  Configuration,
  DELETE: HTTPDelete,
  Docs,
  EKG,
  EditGraph,
  ErrorList,
  Exclamation,
  Explorer,
  Fabric,
  Finagle,
  Functions,
  GET: HTTPGet,
  GRPC,
  GitHub,
  Go: JVM,
  Http,
  Info,
  Instances,
  JVM,
  Key,
  LinkedIn,
  List,
  Memory,
  Negation,
  NoKey,
  NoMetrics,
  PATCH: HTTPPatch,
  POST: HTTPPost,
  PUT: HTTPPut,
  Pause,
  Person,
  Play,
  Poll,
  Power,
  Rows,
  RunningSmall,
  Scale,
  Scatterplot,
  Service,
  ServiceInstance,
  ServicesWhite,
  StarFilled,
  Summary,
  Tape,
  Threads,
  Timer,
  Twitter,
  ViewCollapse
};

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

  glyphs = {
    name: this.props.name
  };

  render() {
    let { name, ratio, glyphColor } = this.props;
    // use upperFirst instead of capitalize to respect camelCase
    name = _.upperFirst(name);

    // if glyph name is not found, return empty glyph and console log an error message
    if (!glyphs[name]) {
      console.log(`${name} is not found in glyph adapter`);
      return <g />;
    }
    // dynamically render glyph component by name
    const GlyphComponent = glyphs[name];

    const viewBoxSize = ICON_VIEWBOX_SIZE;
    const glyphTranslateDist = (ratio - 1) * (0.5 * viewBoxSize) * -1;

    return (
      <g
        className="glyph"
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
        <GlyphComponent />
      </g>
    );
  }
}

Glyph.defaultProps = {
  ratio: 1,
  glyphColor: "currentColor"
};
