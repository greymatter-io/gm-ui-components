import React from "react";
import { shallow } from "enzyme";
import Exclamation from "./Exclamation";

describe("Exclamation", () => {
  it("matches snapshot", () => {
    const aExclamation = shallow(<Exclamation />);
    expect(aExclamation).toMatchSnapshot();
  });
});
