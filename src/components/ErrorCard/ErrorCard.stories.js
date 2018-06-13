import React from "react";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs/react";

import ErrorCard from "./ErrorCard";
import { Negation } from "../";

storiesOf("ErrorCard", module)
  .add("default", () => <ErrorCard errorMsg={text("errorMsg")} />)
  .add("with custom Icon", () => (
    <ErrorCard
      errorMsg={text("errorMsg", "Uh oh")}
      icon={() => (
        <Negation
          backgroundColor="#EFB53F"
          borderOpacity="0"
          backgroundStyle="BackgroundSquareSmall"
          glyphColor="white"
          size="72px"
        />
      )}
    />
  ));
