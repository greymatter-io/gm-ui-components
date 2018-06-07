import React from "react";
import { shallow } from "enzyme";
import Spinner from "./Spinner";

describe("Spinner", () => {
  it("matches snapshot", () => {
    const aSpinner = shallow(<Spinner />);
    expect(aSpinner).toMatchSnapshot();
  });
});
