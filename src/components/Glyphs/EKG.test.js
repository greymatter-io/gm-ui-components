import React from "react";
import { shallow } from "enzyme";
import EKG from "./EKG";

describe("EKG", () => {
  it("matches snapshot", () => {
    const aEKG = shallow(<EKG />);
    expect(aEKG).toMatchSnapshot();
  });
});
