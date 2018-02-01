import React from "react";
import { shallow } from "enzyme";
import Twitter from "./Twitter";

describe("Twitter", () => {
  it("matches snapshot", () => {
    const aTwitter = shallow(<Twitter />);
    expect(aTwitter).toMatchSnapshot();
  });
});
