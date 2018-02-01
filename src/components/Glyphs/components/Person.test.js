import React from "react";
import { shallow } from "enzyme";
import Person from "./Person";

describe("Person", () => {
  it("matches snapshot", () => {
    const aPerson = shallow(<Person />);
    expect(aPerson).toMatchSnapshot();
  });
});
