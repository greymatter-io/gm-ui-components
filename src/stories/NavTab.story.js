import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs, number, boolean } from "@storybook/addon-knobs/react";
import NavTab from "../components/NavTab";
import NavTabGroup from "../components/NavTabGroup";
import { Bell } from "../components/Glyphs"

const stories = storiesOf("NavTab", module);

stories.addDecorator(withKnobs);

stories.add("Tabs", () => {
  return (
    <div style={{ width: "100vw" }}>
      <NavTab label="Active Nav Tab" active />
      <NavTab label="Label"><Bell /></NavTab>
      <NavTab />
      <NavTab disabled label="Disabled Tab" />
    </div>
  );
});

stories.add("TabGroup", () => {
  return (
    <div style={{ width: "100vw" }}>
      <NavTabGroup label="Tabs group">
        <NavTab label="Active Nav" active />
        <NavTab label="Label"><Bell /></NavTab>
        <NavTab />
        <NavTab disabled label="Disabled" />
      </NavTabGroup>
    </div>
  );
});
