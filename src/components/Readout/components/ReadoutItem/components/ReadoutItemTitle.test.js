import React from "react";
import { shallow } from "enzyme";
import ReadoutItemTitle from "./ReadoutItemTitle";

describe("ReadoutItemTitle", () => {
  it("matches snapshot", () => {
    const aReadoutItemTitle = shallow(<ReadoutItemTitle />);
    expect(aReadoutItemTitle).toMatchSnapshot();
  });
});
