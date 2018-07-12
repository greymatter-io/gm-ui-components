import React from "react";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs/react";
import AppFooter from "./AppFooter";
import { withInfo } from "@storybook/addon-info";

const stories = storiesOf("AppFooter", module);

stories.add(
  "Full Width",
  withInfo(
    "AppFooter for Decipher products. You can supply a `copyrightText` prop which can be an element, node, or string. This can be useful if your app supports i18n. Otherwise, the AppFooter will default to the English copyright text: 'Copyright &copy; 2018 Decipher Technology Studios. All rights reserved. Copyright &copy; 2018 Grey Matter, a Decipher Technology Studios product. All rights reserved.'"
  )(() => <AppFooter copyrightText={text("copyrightText")} />)
);
