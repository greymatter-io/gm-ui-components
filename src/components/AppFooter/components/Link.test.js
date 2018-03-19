import React from "react";
import { shallow } from "enzyme";
import Link from "./Link";

describe("Link", () => {
  it("should render", () => {
    const aLink = shallow(<Link />);
    expect(aLink).toMatchSnapshot();
  });
});
