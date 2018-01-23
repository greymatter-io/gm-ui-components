import React from "react";
import { shallow } from "enzyme";
import Fabric from "./Fabric";

describe("Fabric", () => {
  it("matches snapshot", () => {
    const aFabric = shallow(<Fabric />);
    expect(aFabric).toMatchSnapshot();
  });
});
