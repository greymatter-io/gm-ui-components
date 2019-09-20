import React from "react";

import Fieldset from "./Fieldset";

export default { title: "Fieldset" };

export const defaultStory = () => {
  return <Fieldset name="Fieldest" />;
};

defaultStory.story = {
  name: "Default",

  parameters: {
    info: {
      text: "A fieldest for groups of form elements."
    }
  }
};
