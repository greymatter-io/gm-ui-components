import React from "react";
import { shallow } from "enzyme";
import ErrorDetail from "./ErrorDetail";

describe("ErrorDetail", () => {
  it("matches snapshot", () => {
    const aErrorDetail = shallow(<ErrorDetail />);
    expect(aErrorDetail).toMatchSnapshot();
  });
});
