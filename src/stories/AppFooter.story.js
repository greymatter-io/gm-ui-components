import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs/react";
import { AppFooter } from "../components";
import { withInfo } from "@storybook/addon-info";

const stories = storiesOf("AppFooter", module);

stories.addDecorator(withKnobs).add(
  "Full Width",
  withInfo(
    "AppFooter for Decipher products. You can supply a `copyrightText` prop which can be an element, node, or string. This can be useful if your app supports i18n. Otherwise, the AppFooter will default to the English copyright text: 'Copyright &copy; 2018 Decipher Technology Studios. All rights reserved. Copyright &copy; 2018 Grey Matter, a Decipher Technology Studios product. All rights reserved.'"
  )(() => {
    return <AppFooter copyrightText={text("copyrightText")} />;
  })
);
