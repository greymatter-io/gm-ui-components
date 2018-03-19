import React from "react";
import { shallow } from "enzyme";
import Copyright from "./Copyright";

describe("Copyright", () => {
  it("should render when screen is 800px or higher", () => {
    const aCopyright = shallow(<Copyright />);
    expect(aCopyright).toMatchSnapshot();
  });
  xit("should not render when screen is less that 800px", () => {});
});
