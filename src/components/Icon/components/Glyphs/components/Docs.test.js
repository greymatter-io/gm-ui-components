import React from "react";
import { shallow } from "enzyme";
import Docs from "./Docs";

describe("Docs", () => {
  it("matches snapshot", () => {
    const aDocs = shallow(<Docs />);
    expect(aDocs).toMatchSnapshot();
  });
});
