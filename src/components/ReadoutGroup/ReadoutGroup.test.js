import React from "react";
import { shallow } from "enzyme";
import ReadoutGroup from "./ReadoutGroup";

describe("ReadoutGroup", () => {
  it("matches snapshot", () => {
    const aReadoutGroup = shallow(<ReadoutGroup />);
    expect(aReadoutGroup).toMatchSnapshot();
  });
});
