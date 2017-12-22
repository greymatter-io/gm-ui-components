import React from "react";
import { shallow } from "enzyme";
import ServiceInstance from "./ServiceInstance";

describe("ServiceInstance", () => {
  it("matches snapshot", () => {
    const aServiceInstance = shallow(<ServiceInstance />);
    expect(aServiceInstance).toMatchSnapshot();
  });
});
