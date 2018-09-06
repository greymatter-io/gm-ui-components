import React from "react";

import { configure, addDecorator } from "@storybook/react";
import { setDefaults } from "@storybook/addon-info";
import { setOptions } from "@storybook/addon-options";
import { withKnobs } from "@storybook/addon-knobs/react";
import { checkA11y } from "@storybook/addon-a11y";
import backgrounds from "@storybook/addon-backgrounds";
import PropTypesTable from "./PropTypesTable";
import { StoryContainer } from "ComponentLibrary/StoryComponents/StoryContainer";

import {
  COLOR_BACKGROUND_A,
  COLOR_BACKGROUND_B,
  COLOR_BACKGROUND_C
} from "./../src/style/styleVariables";

const req = require.context("../src", true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}
// add withKnobs globally so we don't need to import it into individual stories
addDecorator(checkA11y);
addDecorator(withKnobs);
addDecorator(
  backgrounds([
    { name: "COLOR_BACKGROUND_A", value: COLOR_BACKGROUND_A, default: true },
    { name: "COLOR_BACKGROUND_B", value: COLOR_BACKGROUND_B },
    { name: "COLOR_BACKGROUND_C", value: COLOR_BACKGROUND_C }
  ])
);
// addon-info
setDefaults({
  header: true, // Toggles display of header with component name and description
  inline: true, // Displays info inline vs click button to view
  source: true, // Displays the source of story Component
  propTables: [
    /* Components used in story */
  ], // displays Prop Tables with this components
  propTablesExclude: [], // Exclude Components from being shoun in Prop Tables section
  styles: {
    infoBody: {
      boxShadow: "inset 0 0 0 rgba(0,0,0,0.08)",
      border: "0",
      borderRadius: "8px",
      backgroundColor: "rgba(200,200,200,.2)"
    }
  }, // Overrides styles of addon
  TableComponent: PropTypesTable,
  components: {}, // Overrides components used to display markdown. Warning! This option's name will be likely deprecated in favor to "components" with the same API in 3.3 release. Follow this PR #1501 for details
  maxPropsIntoLine: 1, // Max props to display per line in source code
  maxPropObjectKeys: 10,
  maxPropArrayLength: 10,
  maxPropStringLength: 100
});

addDecorator(story => <StoryContainer>{story()}</StoryContainer>);

// Options:
setOptions({
  /**
   * name to display in the top left corner
   * @type {String}
   */
  name: "Grey Matter UI Components",
  /**
   * URL for name in top left corner to link to
   * @type {String}
   */
  url: "#",
  /**
   * show story component as full screen
   * @type {Boolean}
   */
  goFullScreen: false,
  /**
   * display left panel that shows a list of stories
   * @type {Boolean}
   */
  showStoriesPanel: true,
  /**
   * display horizontal panel that displays addon configurations
   * @type {Boolean}
   */
  showAddonPanel: true,
  /**
   * display floating search box to search through stories
   * @type {Boolean}
   */
  showSearchBox: false,
  /**
   * show horizontal addons panel as a vertical panel on the right
   * @type {Boolean}
   */
  addonPanelInRight: false,
  /**
   * sorts stories
   * @type {Boolean}
   */
  sortStoriesByKind: true,
  /**
   * regex for finding the hierarchy separator
   * @example:
   *   null - turn off hierarchy
   *   /\// - split by `/`
   *   /\./ - split by `.`
   *   /\/|\./ - split by `/` or `.`
   * @type {Regex}
   */
  hierarchySeparator: /\//,
  hierarchyRootSeparator: /\|/,
  sidebarAnimations: false,

  /**
   * id to select an addon panel
   * @type {String}
   */
  selectedAddonPanel: undefined // The order of addons in the "Addons Panel" is the same as you import them in 'addons.js'. The first panel will be opened by default as you run Storybook
});

configure(loadStories, module);
