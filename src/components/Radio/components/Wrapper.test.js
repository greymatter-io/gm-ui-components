import React from "react";
import { shallow } from "enzyme";

import Wrapper from "./Wrapper";

describe("Wrapper", () => {
  it("should render", () => {
    const aWrapper = shallow(<Wrapper />);
    expect(aWrapper).toMatchSnapshot();
  });

  it("should render different label positions", () => {
    const positions = ["left", "right", "top", "bottom"];

    positions.forEach(position => {
      const aWrapper = shallow(<Wrapper labelPosition={position} />);
      expect(aWrapper).toMatchSnapshot();
    });
  });
});
