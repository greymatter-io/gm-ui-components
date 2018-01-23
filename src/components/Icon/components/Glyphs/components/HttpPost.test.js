import React from "react";
import { shallow } from "enzyme";
import HttpPost from "./HttpPost";

describe("HttpPost", () => {
  it("matches snapshot", () => {
    const aHttpPost = shallow(<HttpPost />);
    expect(aHttpPost).toMatchSnapshot();
  });
});
