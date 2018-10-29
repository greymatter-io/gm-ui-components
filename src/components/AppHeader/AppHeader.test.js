import React from "react";
import { shallow } from "enzyme";
import { Button } from "../";

import AppHeader from "./AppHeader";

const bannerExtras = [
  {
    path: "/settings",
    title: "Extra, Extra, Read all about it"
  }
];

const toolbarItems = () => {
  return (
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
  );
};

describe("AppHeader component", () => {
  let aHeader;

  beforeEach(() => {
    aHeader = shallow(
      <AppHeader
        title="GM UI AppHeader"
        extras={bannerExtras}
        toolbarItems={toolbarItems}
      />
    );
  });

  test("matches snapshot", () => {
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
    expect(aHeader.find("HeaderToolbar").props().toolbarItems).toBe(
      toolbarItems
    );
  });
});
