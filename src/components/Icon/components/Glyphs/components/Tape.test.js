import React from "react";
import { shallow } from "enzyme";
import Tape from "./Tape";

describe("Tape", () => {
  it("matches snapshot", () => {
    const aTape = shallow(<Tape />);
    expect(aTape).toMatchSnapshot();
  });
});
