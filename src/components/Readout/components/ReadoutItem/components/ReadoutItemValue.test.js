import React from "react";
import { shallow } from "enzyme";
import ReadoutItemValue from "./ReadoutItemValue";

describe("ReadoutItemValue", () => {
  it("matches snapshot", () => {
    const aReadoutItemValue = shallow(<ReadoutItemValue />);
    expect(aReadoutItemValue).toMatchSnapshot();
  });
});
