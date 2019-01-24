import React from "react";
import { storiesOf } from "@storybook/react";
import { object, text } from "@storybook/addon-knobs";

import {
  ButtonGroup,
  IconCog,
  Button,
  AppHeader,
  Breadcrumbs
} from "components";
import { spacingScale } from "style/styleFunctions";

const stories = storiesOf("Components|App Header", module);

const bannerExtras = [
  {
    path: "/settings",
    title: "Extra, Extra, Read all about it"
  }
];

const breadcrumbs = [
  "Fabric",
  "Instances",
  "Routes",
  "Grace Hopper Battleship Service"
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
        alignItems: "center",
        flex: "1 1 auto"
      }}
    >
      <Breadcrumbs crumbs={breadcrumbs} />
      <span>1.1.6</span>
      <ToolbarButtonGroup style={{ paddingRight: 0 }}>
        <Button
          outline={false}
          size="xs"
          label=""
          type="info"
          style={{
            border: "none",
            backgroundColor: "white",
            color: "black"
          }}
        >
          <IconCog size={"24px"} />
        </Button>
      </ToolbarButtonGroup>
    </div>
  );
};

stories.add(
  "default",
  () => {
    return (
      <AppHeader
        title={text("title", "GM UI App Header")}
        extras={object("extras", bannerExtras)}
        toolbarItems={toolbarItems}
      />
    );
  },
  {
    info: {
      text:
        "An AppHeader component that renders a title and other various toolbarItems that you can render by providing a render function."
    }
  }
);
