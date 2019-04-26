import React from "react";
import { storiesOf } from "@storybook/react";
import { boolean, text, object } from "@storybook/addon-knobs";
import AppFooter from "./AppFooter";
import { IconBell } from "../";
const stories = storiesOf("Components|App Footer", module);

stories
  .add(
    "default",
    () => (
      <AppFooter
        copyrightText={text("copyrightText")}
        useExternalLinks={boolean("useExternalLinks", true)}
      />
    ),
    {
      info: {
        text: `AppFooter for Grey Matter products.`
      }
    }
  )
  .add(
    "with custom children",
    () => (
      <AppFooter>
        <span>Custom Content</span>
        <span>Custom Content</span>
        <span>Custom Content</span>
      </AppFooter>
    ),
    {
      info: {
        text: `AppFooter for Grey Matter products.\n\nProviding \`children\` to AppFooter overrides all default footer content.`
      }
    }
  )
  .add(
    "with footer section overrides",
    () => (
      <AppFooter
        footerLeft={<IconBell />}
        footerCenter={<span>My custom footer center!</span>}
      />
    ),
    {
      info: {
        text: `AppFooter for Grey Matter products.\n\nUse the \`footerLeft\`, \`footerCenter\`, and \`footerRight\` props to override specific sections of the footer.`
      }
    }
  );
