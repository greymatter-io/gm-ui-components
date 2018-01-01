import React from "react";
import { shallow } from "enzyme";
import ButtonGroup from "./ButtonGroup";

describe("ButtonGroup", () => {
  it("matches snapshot when toolbar props is passed", () => {
    const aButtonGroup = shallow(<ButtonGroup toolbar />);
    expect(aButtonGroup).toMatchSnapshot();
  });
  it("matches snapshot when toolbar props is not passed", () => {
    const aButtonGroup = shallow(<ButtonGroup />);
    expect(aButtonGroup).toMatchSnapshot();
  });
});
