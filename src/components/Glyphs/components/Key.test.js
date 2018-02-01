import React from "react";
import { shallow } from "enzyme";
import Key from "./Key";

describe("Key", () => {
  it("matches snapshot", () => {
    const aKey = shallow(<Key />);
    expect(aKey).toMatchSnapshot();
  });
});
