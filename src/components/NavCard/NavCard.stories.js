import React from "react";

import { storiesOf } from "@storybook/react";
import { text, object, array } from "@storybook/addon-knobs/react";

import NavCard from "components/NavCard";

import { Exclamation } from "gm-ui-components";

storiesOf("NavCard", module).add("Basic NavCard", () => {
  return (
    <NavCard
      href={text("Target href", "http://www.deciphernow.com/")}
      icon={() => <Exclamation />}
      lines={object("Detail Lines", [{ name: "Memory Used", value: "116 MB" }])}
      title={text("Title", "Summary")}
      chartData={array("Chart Data", [6, 2, 5.2, 8, 3, 6, 5.37, 7, 3.3, 8])}
    />
  );
});
