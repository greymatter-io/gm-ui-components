import React, { Fragment } from "react";
import { shallow } from "enzyme";
import { Button, ButtonGroup } from "../../../";

import HeaderToolbar from "./HeaderToolbar";

const breadcrumbs = ["Fabric", "Grace Hopper Battleship Service"];

const toolbarItems = () => {
  return (
    <Fragment>
      <span>1.1.6</span>
      <ButtonGroup>
        <Button
          outline={true}
          size="xs"
          label="Settings"
          type="info"
          style={{
            border: "none",
            backgroundColor: "white",
            color: "black"
          }}
        />
      </ButtonGroup>
    </Fragment>
  );
};

describe("HeaderToolbar component", () => {
  let aHeaderToolbar;

  beforeEach(() => {
    aHeaderToolbar = shallow(
      <HeaderToolbar breadcrumbs={breadcrumbs} toolbarItems={toolbarItems} />
    );
  });

  test("matches snapshot with instance view tabs", () => {
    expect(aHeaderToolbar).toMatchSnapshot();
  });

  test("renders subcomponents", () => {
    expect(aHeaderToolbar.find("HeaderToolbarWrapper")).toHaveLength(1);
  });

  test("renders toolbarItems", () => {
    expect(aHeaderToolbar.find("span").text()).toBe("1.1.6");
    expect(aHeaderToolbar.find("ButtonGroup")).toHaveLength(1);
    expect(aHeaderToolbar.find("Button")).toHaveLength(1);
  });
});
