import React from "react";
import { shallow } from "enzyme";
import Links from "./Links";

describe("Link", () => {
  it("should render", () => {
    const aLinks = shallow(<Links />);
    expect(aLinks).toMatchSnapshot();
  });
});
