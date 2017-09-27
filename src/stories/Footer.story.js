import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Footer } from "../components";

import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

const stories = storiesOf("Footer", module);

stories.addDecorator(withKnobs);

storiesOf("Footer", module)
  .add("Full Width", () => {
    return (
        <Footer />
    );
  });
