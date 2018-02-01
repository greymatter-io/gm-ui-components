import React from "react";
import { shallow } from "enzyme";
import ErrorList from "./ErrorList";

describe("ErrorList", () => {
  it("matches snapshot", () => {
    const aErrorList = shallow(<ErrorList />);
    expect(aErrorList).toMatchSnapshot();
  });
});
