import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, select, number, color } from "@storybook/addon-knobs";

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

// dynamic glyph name is used for story knob testing only.
// call the glyph component by name specifically, <CardGlyph> instead of <Glyph name="CardGlyph"> for code implementation

storiesOf("Icons", module)
  .addDecorator(withKnobs)
  .add(" Icon", () => {
    const glyphName = select("Glyph", glyphNames, "Card");

    return (
      <Icon
        glyphName={glyphName}
        backgroundStyle={select(
          "Icon Background",
          iconBackgroundNames,
          "BackgroundSquare"
        )}
        backgroundColor={color("Background Color", "#f00")}
        backgroundOpacity={number("Background Opacity", 0.5)}
        borderStyle={select("Icon Border", iconBorderNames, "BorderSquare")}
        borderColor={color("Border Color", "currentColor")}
        borderOpacity={number("Border Opacity", 0.5)}
        iconRatio={number("Icon Ratio", 1)}
        glyphColor={color("Glyph Color", "currentColor")}
        glyphRatio={number("Glyph Ratio", 1)}
        transform={""}
      />
    );
  });
