import React from "react";
import styled from "styled-components";
import { boolean, text } from "@storybook/addon-knobs";
import AppFooter from "./AppFooter";
import { IconBell } from "..";

export default { title: "AppFooter" };

export const defaultStory = () => (
  <AppFooter
    copyrightText={text("copyrightText")}
    useExternalLinks={boolean("useExternalLinks", true)}
  />
);

defaultStory.story = {
  name: "Default",

  parameters: {
    info: {
      text: `AppFooter for Grey Matter products.`
    }
  }
};

export const withCustomChildren = () => (
  <AppFooter>
    <span>Custom Content</span>
    <span>Custom Content</span>
    <span>Custom Content</span>
  </AppFooter>
);

withCustomChildren.story = {
  name: "With custom children",

  parameters: {
    info: {
      text: `AppFooter for Grey Matter products.\n\nProviding \`children\` to AppFooter overrides all default footer content.`
    }
  }
};

export const withFooterSectionOverrides = () => (
  <AppFooter
    footerLeft={<IconBell />}
    footerCenter={<span>My custom footer center!</span>}
  />
);

withFooterSectionOverrides.story = {
  name: "With footer section overrides",

  parameters: {
    info: {
      text: `AppFooter for Grey Matter products.\n\nUse the \`footerLeft\`, \`footerCenter\`, and \`footerRight\` props to override specific sections of the footer.`
    }
  }
};
