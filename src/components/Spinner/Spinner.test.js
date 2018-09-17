import React from "react";
import { shallow } from "enzyme";
import Spinner from "./Spinner";

describe("Spinner", () => {
  it("matches snapshot", () => {
    const aSpinner = shallow(<Spinner orientation="vertical" />);
    expect(aSpinner).toMatchSnapshot();
  });
});
