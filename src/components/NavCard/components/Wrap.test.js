import React from "react";
import { shallow } from "enzyme";
import Wrap from "./Wrap";

describe("Wrap", () => {
  it("matches snapshot", () => {
    const aWrap = shallow(<Wrap />);
    expect(aWrap).toMatchSnapshot();
  });
});
