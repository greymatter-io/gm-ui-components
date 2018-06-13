import React from "react";
import { shallow } from "enzyme";

import HeaderBanner from "./HeaderBanner";

const bannerExtras = [
  {
    path: "/settings",
    title: "Extra, Extra, Read all about it"
  }
];

describe("HeaderBanner component", () => {
  let aHeaderBanner;

  beforeEach(() => {
    aHeaderBanner = shallow(
      <HeaderBanner extras={bannerExtras} title={"GM UI Header Banner"} />
    );
  });

  test("matches snapshot", () => {
    expect(aHeaderBanner).toMatchSnapshot();
  });

  test("renders subcomponents", () => {
    expect(aHeaderBanner.find("HeaderContainer")).toHaveLength(1);
    expect(aHeaderBanner.find("Header")).toHaveLength(1);
    expect(aHeaderBanner.find("Extra")).toHaveLength(1);
  });

  test("renders a title if one is provided, otherwise renders a — ", () => {
    expect(
      aHeaderBanner
        .find("Header")
        .children()
        .text()
    ).toBe("GM UI Header Banner");
    aHeaderBanner = shallow(<HeaderBanner title="" />);
    expect(
      aHeaderBanner
        .find("Header")
        .children()
        .text()
    ).toBe("—");
  });

  test("renders extras", () => {
    expect(
      aHeaderBanner
        .find("Extra")
        .children()
        .text()
    ).toBe("Extra, Extra, Read all about it");
  });
});
