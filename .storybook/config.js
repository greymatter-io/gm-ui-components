import React from "react";
import { configure, addDecorator, addParameters } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withInfo } from "@storybook/addon-info";
import { withOptions } from "@storybook/addon-options";
import { withKnobs } from "@storybook/addon-knobs";
import { setDefaults } from "react-storybook-addon-props-combinations";
import { withThemesProvider } from "storybook-addon-styled-component-theme";
import gmTheme from "./gmTheme";

import PropTypesTable from "./PropTypesTable";
import StoryContainer from "ComponentLibrary/StoryComponents/StoryContainer";
import { keen, keenDark } from "style/theme";
import { transparentize } from "polished";

const req = require.context("../src/", true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addParameters({
  options: {
    theme: gmTheme,
    brandTitle: "Grey Matter UI Components",
    brandUrl: "#",
    isFullscreen: false,
    showNav: true,
    showPanel: true,
    showSearchBox: false,
    panelPosition: "bottom",
    sortStoriesByKind: true,
    chySeparator: /\//,
    hierarchyRootSeparator: /\|/,
    sidebarAnimations: false,
    selectedAddonPanel: undefined // The order of addons in the "Addons Panel" is the same as you import them in 'addons.js'. The first panel will be opened by default as you run Storybook
  }
});

// add withKnobs globally so we don't need to import it into individual stories
addDecorator(withKnobs);

addDecorator(withA11y);

addDecorator(story => <StoryContainer>{story()}</StoryContainer>);

const themes = [keen, keenDark];
addDecorator(withThemesProvider(themes));

configure(loadStories, module);
