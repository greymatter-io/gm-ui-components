import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs, number, boolean } from "@storybook/addon-knobs/react";
import SectionHeader from "../components/SectionHeader";
import SubsectionHeader from "../components/SubsectionHeader";

const stories = storiesOf("Text", module);

stories.addDecorator(withKnobs);

stories.add("All", () => {
  return (
    <div style={{ width: "100vw" }}>
      <SectionHeader label={"Section Header"} />
      <SubsectionHeader label={"Subsection Header"} />
    </div>
  );
});


stories.add("Subsection Header", () => {
  return (
    <div style={{ width: "100vw" }}>
      <SubsectionHeader label={"test"} />
    </div>
  );
});
