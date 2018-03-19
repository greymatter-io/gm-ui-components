import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs/react";
import { withInfo } from "@storybook/addon-info";

import Button from "../components/Button";
import ButtonGroup from "../components/ButtonGroup";

storiesOf("Button Group", module)
  .addDecorator(withKnobs)
  .addDecorator(
    withInfo(
      "An ButtonGroup component that takes any number of Button components as children"
    )
  )
  .add("default", () => {
    return (
      <ButtonGroup>
        <Button label="Button #1" />
        <Button label="Button #2" />
        <Button label="Button #3" />
      </ButtonGroup>
    );
  });
