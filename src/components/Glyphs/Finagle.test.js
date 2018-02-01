import React from "react";
import { shallow } from "enzyme";
import Finagle from "./Finagle";

describe("Finagle", () => {
  it("matches snapshot", () => {
    const aFinagle = shallow(<Finagle />);
    expect(aFinagle).toMatchSnapshot();
  });
});
