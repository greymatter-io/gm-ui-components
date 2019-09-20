import React from "react";
import { text } from "@storybook/addon-knobs";

import ErrorCard from "./ErrorCard";
import { IconNegation } from "..";

export default { title: "ErrorCard" };

export const defaultStory = () => (
  <ErrorCard
    errorMsg={text("errorMsg")}
    icon={() => (
      <IconNegation
        backgroundColor="#EFB53F"
        borderOpacity="0"
        backgroundStyle="BackgroundSquareSmall"
        glyphColor="white"
        size="72px"
      />
    )}
  />
);

defaultStory.story = {
  name: "Default",

  parameters: {
    info: {
      text:
        "A stateless card component that renders an error message and an icon. By default the card renders an 'exclamation' icon, but you can pass it any icon you'd like using a render prop."
    }
  }
};
