<h1 align="center">
  <br>
  <img src="./src/images/decipher-logo.png" alt="Decipher Logo" width="50">
  <br>
  Grey Matter UI Component Library
  <br>
</h1>

<h4 align="center">React components for Grey Matter user interfaces</h4>

<p align="center">
  <a href="https://github.com/prettier/prettier" target="_blank">
    <img src="https://img.shields.io/badge/formatted_with-prettier-ff69b4.svg"
         alt="styled with prettier">
  </a>
  <a href="https://www.styled-components.com/" target="_blank"><img src="https://img.shields.io/badge/styled_with-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357" alt="styled with styled-components"></a>
  <a href="https://circleci.com/gh/DecipherNow/gm-ui-components/tree/master" target="_blank"><img src="https://circleci.com/gh/DecipherNow/gm-ui-components/tree/master.svg?style=shield" alt="tested on CircleCI"></a>
  <a href="https://codeclimate.com/github/DecipherNow/gm-ui-components/maintainability"><img src="https://api.codeclimate.com/v1/badges/878bee2571c9dca75eef/maintainability" /></a>
  <a href="https://codeclimate.com/github/DecipherNow/gm-ui-components/test_coverage"><img src="https://api.codeclimate.com/v1/badges/878bee2571c9dca75eef/test_coverage" /></a>
  <a href="https://opensource.org/licenses/mit-license.php" target="_blank"><img src="https://badges.frapsoft.com/os/mit/mit.svg?v=103" alt="licensed under MIT"></a>
  <a href="https://david-dm.org/deciphernow/gm-ui-components" target="_blank"><img src="https://david-dm.org/deciphernow/gm-ui-components.svg" alt="dependency vulnerabilities tracked by DavidDM"></a>
</p>

<p align="center">
  <a href="#installation">Installation</a> •
  <a href="#usage">Usage</a> •
  <a href="#documentation">Documentation</a> •
  <a href="#compatability">Compatability</a> •
  <a href="#related-projects">Related Projects</a> •
  <a href="#license">License</a>
</p>

# Installation

gm-ui-components is available as an npm package:

```sh
npm install --save gm-ui-components
```

# Usage

An example using the Button component:

```javascript
import React from 'react';
import { render } from 'react-dom';
import { Button } from 'gm-ui-components';

function App() {
  return (
    <Button
        label="Hello World!"
        type="default"
        size="xl"
        active={true}
    />
  );
}

render(<App />, document.querySelector('#app'));
```

## Theming
The component library provides 2 themes out of the box - `keen` and `keenDark`. All components use the `keen` theme by default. 

To use `keenDark` or a custom theme, wrap your app in a `ThemeProvider` and pass the theme object:

```javascript
// App.js
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from 'react-dom';
import { Button, keenDark } from 'gm-ui-components';

function Button() {
  return (
    <Button
        label="Hello World!"
        type="default"
        size="xl"
        active={true}
    />
  );
}

render(
  <ThemeProvider theme={keenDark}>
    <App />
  </ThemeProvider>, 
  document.querySelector('#app'));
```

To extend the theme, you must pass a theme object that follows our schema. Here is an example of the schema and its defaults:

```javascript
{
  name: "Keen",

  COLOR_BRAND_A: "#0aab2a",
  COLOR_BRAND_B: "#0aab2a",
  COLOR_CONTENT: "#000",

  COLOR_BACKGROUND_A: "#ffffff",
  COLOR_BACKGROUND_B: "#F8F8F8",
  COLOR_BACKGROUND_C: "#000000",

  COLOR_INTENT_HIGHLIGHT: COLOR_BRAND_A,
  COLOR_INTENT_SUCCESS: COLOR_BRAND_A,
  COLOR_INTENT_DANGER: "#D83D22",
  COLOR_INTENT_WARNING: "#F7CD45",
  COLOR_INTENT_INFO: "#1E6DF6",

  COLOR_KEYLINE: "rgba(0,0,0,0.08)",
  COLOR_KEYLINE_SOLID: "#EBEBEB",

  OPACITY_100: "1",
  OPACITY_70: "0.7",
  OPACITY_50: "0.5",
  OPACITY_15: "0.15",

  // LAYOUT
  BORDER_RADIUS_BASE: "3px",
  SPACING_BASE: 8,
  ICON_VIEWBOX_SIZE: 24,

  ZINDEX_TOOLTIP: "1070",
  ZINDEX_STICKY: "1010",

  RADIUS_05: "4px",
  RADIUS_1: "8px",
  RADIUS_2: "16px",
  RADIUS_3: "24px",
  RADIUS_4: "32px",
  RADIUS_5: "40px",
  RADIUS_6: "48px",
  RADIUS_7: "56px",
  RADIUS_8: "64px",

  // TYPOGRAPHY
  FONTS_SYSTEM: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`,
  FONTS_BRAND: `"Avenir Next", "Metropolis", "Helvetica Neue", Arial, sans-serif`,
  FONTS_CODE: `"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace`,

  FONT_STACK_BASE: FONTS_SYSTEM,
  FONT_STACK_BRAND: FONTS_BRAND,
  FONT_STACK_CODE: FONTS_CODE,

  FONT_SIZE_HERO: "40px",
  FONT_SIZE_TITLE: "36px",
  FONT_SIZE_LG: "18px",
  FONT_SIZE_MD: "16px",
  FONT_SIZE_BASE: "14px",
  FONT_SIZE_SM: "11px",
  FONT_SIZE_XS: "9px",

  LINE_HEIGHT_BASE: 1.4,
  FONT_WEIGHT_BASE: 400,
  FONT_WEIGHT_SEMIBOLD: 600,
  FONT_WEIGHT_BOLD: 800
};
```

You can extend this base theme like so:

```javascript
// ...App.js

keen = {
  ...keen,
  COLOR_BRAND_A: "#03aaed"
}

render(
  <ThemeProvider theme={keen}>
    <App />
  </ThemeProvider>, 
  document.querySelector('#app'));
```

You can find more information on style variables [here](https://deciphernow.github.io/gm-ui-components/?selectedKind=%20Overview%7CStyles&selectedStory=Styles&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Fthemes%2Fpanel).


# Documentation

See the [Grey Matter UI Components storybook](https://deciphernow.github.io/gm-ui-components) for more usage examples and documentation.

# Compatability

* [Full list of browser support matrix](http://browserl.ist/?q=last+2+Chrome+versions%2C+last+2+ChromeAndroid+versions%2C+last+2+Safari+versions%2C+last+2+iOS+versions%2C+last+2+Firefox+versions%2C+last+2+Edge+versions)

# Related Projects

* [Grey Matter Fabric JVM SDK](https://github.com/DecipherNow/gm-fabric-jvm)
* [Grey Matter Fabric Go SDK](https://github.com/DecipherNow/gm-fabric-go)
* [Grey Matter Fabric Passthrough Agent](https://github.com/DecipherNow/gm-fabric-jvmagent)

# License

MIT
