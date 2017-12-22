import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, select, number, color, text } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";

import Icon from "../components/Icon";

const glyphNames = [
  "Bars",
  "Bell",
  "CPU",
  "Card",
  "Cog",
  "Configuration",
  "Docs",
  "EKG",
  "EditGraph",
  "ErrorList",
  "Exclamation",
  "Explorer",
  "Fabric",
  "Finagle",
  "GRPC",
  "GitHub",
  "Http",
  "Info",
  "Instances",
  "JVM",
  "Key",
  "LinkedIn",
  "Memory",
  "Negation",
  "Pause",
  "Person",
  "Play",
  "Poll",
  "Power",
  "Rows",
  "RunningSmall",
  "Scale",
  "Scatterplot",
  "Service",
  "ServiceInstance",
  "ServicesWhite",
  "StarFilled",
  "Summary",
  "Tape",
  "Threads",
  "Timer",
  "ViewCollapse",
  "GET",
  "PUT",
  "POST",
  "DELETE",
  "PATCH"
];

const iconBackgroundNames = [
  "BackgroundCircleSmall",
  "BackgroundSquare",
  "BackgroundSquareBeveled",
  "BackgroundSquareRounded",
  "BackgroundSquareRoundedSmooth",
  "BackgroundSquareSmall",
  "BackgroundSquircle",
  "BackgroundTriangle",
  "BackgroundTriangleSmall"
];

const iconBorderNames = [
  "BorderCircleSmall",
  "BorderSquare",
  "BorderSquareSmall",
  "BorderTriangleSmall"
];

storiesOf("Icons", module)
  .addDecorator(withKnobs)
  .add(
    "default",
    withInfo(
      "An Icon component that renders a variety of glyphs (see the gallery for all glyph options)"
    )(() => {
      return (
        <Icon
        backgroundStyle={select(
          "backgroundStyle",
          iconBackgroundNames,
          "BackgroundSquareRounded"
        )}
        backgroundColor={color("backgroundColor", "#000")}
        backgroundOpacity={number("backgroundOpacity", 2)}
        backgroundSizeRatio={number("backgroundSizeRatio", 1)}
        borderStyle={select("borderStyle", iconBorderNames, "BorderSquare")}
        borderColor={color("borderColor", "currentColor")}
        borderOpacity={number("borderOpacity", 0.5)}
        borderWidth={number("borderWidth", 0.1)}
        glyphColor={color("glyphColor", "#fff")}
        glyphSizeRatio={number("glyphSizeRatio", 1)}
        glyph={select("glyph", glyphNames, "Bell")}
        />
      );
    })
  )
  .add("gallery", () => {
    return <div>
    {glyphNames.map(glyph => {
      return <div key={glyph}>
      <span>{glyph}: </span>
      <Icon
          glyph={glyph}
          backgroundStyle="BackgroundSquareRounded"
          backgroundColor="#eee"
          backgroundOpacity={1}
          backgroundSizeRatio={1}
          glyphColor="#000"
          glyphRatio={1}
        /></div>
    })}
    </div>
  });
