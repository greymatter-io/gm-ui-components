import React from "react";
import { shallow } from "enzyme";
import Info from "./Info";

describe("Info", () => {
  it("matches snapshot", () => {
    const aInfo = shallow(<Info />);
    expect(aInfo).toMatchSnapshot();
  });
});
