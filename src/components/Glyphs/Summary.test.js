import React from "react";
import { shallow } from "enzyme";
import Summary from "./Summary";

describe("Summary", () => {
  it("matches snapshot", () => {
    const aSummary = shallow(<Summary />);
    expect(aSummary).toMatchSnapshot();
  });
});
