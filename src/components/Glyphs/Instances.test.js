import React from "react";
import { shallow } from "enzyme";
import Instances from "./Instances";

describe("Instances", () => {
  it("matches snapshot", () => {
    const aInstances = shallow(<Instances />);
    expect(aInstances).toMatchSnapshot();
  });
});
