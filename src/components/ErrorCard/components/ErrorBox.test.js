import React from "react";
import { shallow } from "enzyme";
import ErrorBox from "./ErrorBox";

describe("ErrorBox", () => {
  it("matches snapshot", () => {
    const aErrorBox = shallow(<ErrorBox />);
    expect(aErrorBox).toMatchSnapshot();
  });
});
