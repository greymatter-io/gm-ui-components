import React from "react";

import { storiesOf } from "@storybook/react";

import  { Footer }  from "../components";

const stories = storiesOf("Footer", module);

storiesOf("Footer", module)
  .add("Full Width", () => {
    return (
        <Footer />
    );
  });
