import React from "react";
import { shallow } from "enzyme";
import Http from "./Http";

describe("Http", () => {
  it("matches snapshot", () => {
    const aHttp = shallow(<Http />);
    expect(aHttp).toMatchSnapshot();
  });
});
