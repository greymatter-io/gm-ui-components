import React from "react";
import { shallow } from "enzyme";
import ErrorGraphic from "./ErrorGraphic";

describe("ErrorGraphic", () => {
  it("matches snapshot", () => {
    const aErrorGraphic = shallow(<ErrorGraphic />);
    expect(aErrorGraphic).toMatchSnapshot();
  });
});
