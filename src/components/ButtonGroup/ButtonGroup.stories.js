import React from "react";

import Button from "components/Button";
import ButtonGroup from "./ButtonGroup";

export default { title: "ButtonGroup", component: ButtonGroup };

export const defaultStory = () => {
  return (
    <ButtonGroup>
      <Button label="Button #1" />
      <Button label="Button #2" />
      <Button label="Button #3" />
    </ButtonGroup>
  );
};

defaultStory.story = {
  name: "Default",

  parameters: {
    info: {
      text:
        "An ButtonGroup component that takes any number of Button components as children"
    }
  }
};
