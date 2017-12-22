import React from "react";
import { shallow } from "enzyme";
import Bars from "./Bars";

describe("Bars", () => {
  it("matches snapshot", () => {
    const aBars = shallow(<Bars />);
    expect(aBars).toMatchSnapshot();
  });
});
