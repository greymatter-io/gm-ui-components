import React from "react";
import { shallow } from "enzyme";
import Spinner from "./Spinner";

describe("Vertical Spinner", () => {
  it("matches snapshot", () => {
    const aSpinner = shallow(<Spinner orientation="vertical" />);
    expect(aSpinner).toMatchSnapshot();
  });
});

describe("Horizontal Spinner", () => {
  it("matches snapshot", () => {
    const aSpinner = shallow(<Spinner orientation="horizontal" />);
    expect(aSpinner).toMatchSnapshot();
  });
});
