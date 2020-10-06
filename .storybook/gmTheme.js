import { create } from "@storybook/theming";

export default create({
  base: "light",

  colorPrimary: "#00b42b",
  colorSecondary: "#00b42b",

  // UI
  appBg: "#fff",
  appContentBg: "#fff",
  appBorderColor: "#ededed",
  appBorderRadius: 4,

  // Typography
  fontBase:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  fontCode:
    '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',

  // Text colors
  textColor: "black",
  textInverseColor: "rgba(255,255,255,0.9)",

  // Toolbar default and active colors
  barTextColor: "silver",
  barSelectedColor: "black",
  barBg: "#fdfdfd",

  // Form colors
  inputBg: "white",
  inputBorder: "#EBEBEB",
  inputTextColor: "black",
  inputBorderRadius: 4,

  brandTitle: "Grey Matter UI Components",
  brandUrl: "https://github.com/greymatter-io/gm-ui-components",
  brandImage: null
});
