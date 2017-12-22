import React from "react";
import { shallow } from "enzyme";
import LinkedIn from "./LinkedIn";

describe("LinkedIn", () => {
  it("matches snapshot", () => {
    const aLinkedIn = shallow(<LinkedIn />);
    expect(aLinkedIn).toMatchSnapshot();
  });
});
