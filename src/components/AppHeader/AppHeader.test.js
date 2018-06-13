import React, { Fragment } from "react";
import { shallow } from "enzyme";
import { Cog, Button, ButtonGroup } from "../";

import AppHeader from "./AppHeader";

const breadcrumbs = [
  "Fabric",
  "Grace Hopper Battleship Service",
  "Instances",
  "Routes"
];

const bannerExtras = [
  {
    path: "/settings",
    title: "Extra, Extra, Read all about it"
  }
];

const toolbarItems = () => {
  return (
    <Fragment>
      <span>1.1.6</span>
      <ButtonGroup>
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
      </ButtonGroup>
    </Fragment>
  );
};

describe("Header component", () => {
  let aHeader;

  beforeEach(() => {
    aHeader = shallow(
      <AppHeader
        title="GM UI AppHeader"
        breadcrumbs={breadcrumbs}
        extras={bannerExtras}
        toolbarItems={toolbarItems}
      />
    );
  });

  test("matches snapshot with instance view tabs", () => {
    expect(aHeader).toMatchSnapshot();
  });

  test("renders subcomponents", () => {
    expect(aHeader.find("HeaderWrapper")).toHaveLength(1);
    expect(aHeader.find("HeaderToolbar")).toHaveLength(1);
    expect(aHeader.find("HeaderBanner")).toHaveLength(1);
  });

  test("passes the correct props to HeaderBanner", () => {
    expect(aHeader.find("HeaderBanner").props().title).toBe("GM UI AppHeader");
    expect(aHeader.find("HeaderBanner").props().extras).toBe(bannerExtras);
  });

  test("passes the correct props to HeaderToolbar", () => {
    expect(aHeader.find("HeaderToolbar").props().breadcrumbs).toBe(breadcrumbs);
    expect(aHeader.find("HeaderToolbar").props().toolbarItems).toBe(
      toolbarItems
    );
  });
});
