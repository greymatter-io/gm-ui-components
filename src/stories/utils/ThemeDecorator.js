import React from "react";
import { ThemeProvider } from "styled-components";

import baseTheme from "../../themes/base.js";

export default function ThemeDecorator(story) {
  const content = story();
  return <ThemeProvider theme={baseTheme}>{content}</ThemeProvider>;
}
