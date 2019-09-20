import React from "react";
import { configure, addDecorator, addParameters } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs } from "@storybook/addon-knobs";
import { withThemesProvider } from "storybook-addon-styled-component-theme";

import gmTheme from "./gmTheme";
import StoryContainer from "ComponentLibrary/StoryComponents/StoryContainer";
import { keen, keenDark } from "style/theme";

const themes = [keen, keenDark];

configure(require.context("../src", true, /\.stories\.js$/), module);

addParameters({
  options: {
    theme: gmTheme,
    brandTitle: "Grey Matter UI Components",
    brandUrl: "#",
    isFullscreen: false,
    showNav: true,
    showPanel: false,
    showSearchBox: true,
    panelPosition: "bottom",
    sortStoriesByKind: true,
    chySeparator: /\//,
    hierarchyRootSeparator: /\|/,
    sidebarAnimations: false,
    selectedAddonPanel: undefined // The order of addons in the "Addons Panel" is the same as you import them in 'addons.js'. The first panel will be opened by default as you run Storybook
  }
});
addDecorator(withKnobs);
addDecorator(withA11y);
addDecorator(story => <StoryContainer>{story()}</StoryContainer>);
addDecorator(withThemesProvider(themes));
