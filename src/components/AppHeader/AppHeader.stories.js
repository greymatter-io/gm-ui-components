import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, object, text } from "@storybook/addon-knobs/react";
import { withInfo } from "@storybook/addon-info";

import { ButtonGroup, Cog, Button, AppHeader, Breadcrumbs } from "components";
import { spacingScale } from "style/styleFunctions";

const bannerExtras = [
  {
    path: "/settings",
    title: "Extra, Extra, Read all about it"
  }
];

const breadcrumbs = [
  <a href="#">Fabric</a>,
  <a href="#">Instances</a>,
  <a href="#">Routes</a>,
  <a href="#">Grace Hopper Battleship Service</a>
];

const ToolbarButtonGroup = ButtonGroup.extend`
  padding: ${spacingScale(0)} ${spacingScale(1)};
`;

const toolbarItems = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        alignItems: "center"
      }}
    >
      <Breadcrumbs crumbs={breadcrumbs} />
      <span>1.1.6</span>
      <ToolbarButtonGroup style={{ paddingRight: 0 }}>
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
    </div>
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
      "An AppHeader component that renders a title and other various toolbarItems that you can render by providing a render function."
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
