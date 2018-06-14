import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, object, text } from "@storybook/addon-knobs/react";
import { withInfo } from "@storybook/addon-info";

import { ButtonGroup, Cog, Button } from "../";
import { spacingScale } from "style/styleFunctions";
import { AppHeader } from "../";

const bannerExtras = [
  {
    path: "/settings",
    title: "Extra, Extra, Read all about it"
  }
];

const breadcrumbs = [
  "Fabric",
  "Grace Hopper Battleship Service",
  "Instances",
  "Routes"
];

const ToolbarButtonGroup = ButtonGroup.extend`
  padding: ${spacingScale(0)} ${spacingScale(1)};
`;

const toolbarItems = () => {
  return (
    <Fragment>
      <span>1.1.6</span>
      <ToolbarButtonGroup>
        <Button
          outline="none"
          size="xs"
          label=""
          type="info"
          style={{
            border: "none",
            backgroundColor: "white",
            color: "black"
          }}
        >
          <Cog size={"24px"} />
        </Button>
      </ToolbarButtonGroup>
    </Fragment>
  );
};

storiesOf("App Header", module)
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div
      style={{
        paddingTop: "30px"
      }}
    >
      {story()}
    </div>
  ))
  .add(
    "default",
    withInfo(
      "An AppHeader component that renders a title, breadcrumbs, extras, and other various toolbarItems that you can render by providing a render function."
    )(() => {
      return (
        <AppHeader
          title={text("title", "GM UI App Header")}
          extras={object("extras", bannerExtras)}
          breadcrumbs={object("breadcrumbs", breadcrumbs)}
          toolbarItems={toolbarItems}
        />
      );
    })
  );
