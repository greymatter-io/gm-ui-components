import React from "react";
import { shallow } from "enzyme";
import ServicesWhite from "./ServicesWhite";

describe("ServicesWhite", () => {
  it("matches snapshot", () => {
    const aServicesWhite = shallow(<ServicesWhite />);
    expect(aServicesWhite).toMatchSnapshot();
  });
});
