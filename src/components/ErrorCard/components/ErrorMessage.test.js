import React from "react";
import { shallow } from "enzyme";
import ErrorMessage from "./ErrorMessage";

describe("ErrorMessage", () => {
  it("matches snapshot", () => {
    const aErrorMessage = shallow(<ErrorMessage />);
    expect(aErrorMessage).toMatchSnapshot();
  });
});
