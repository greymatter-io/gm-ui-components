import React from "react";
import { shallow } from "enzyme";

import Copyright from "./Copyright";

describe("Copyright", () => {
  it("should match snapshot", () => {
    const aCopyright = shallow(<Copyright />);
    expect(aCopyright).toMatchSnapshot();
  });
});
