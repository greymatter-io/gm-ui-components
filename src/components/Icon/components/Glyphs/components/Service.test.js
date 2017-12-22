import React from "react";
import { shallow } from "enzyme";
import Service from "./Service";

describe("Service", () => {
  it("matches snapshot", () => {
    const aService = shallow(<Service />);
    expect(aService).toMatchSnapshot();
  });
});
