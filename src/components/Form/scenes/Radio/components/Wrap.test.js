import React from "react";
import { shallow } from "enzyme";

import Wrap from "./Wrap";

describe("Wrap", () => {
  it("should render", () => {
    const aWrap = shallow(<Wrap />);
    expect(aWrap).toMatchSnapshot();
  });

  it("should render different label positions", () => {
    const positions = ["left", "right", "top", "bottom"];

    positions.forEach(position => {
      const aWrap = shallow(<Wrap labelPosition={position} />);
      expect(aWrap).toMatchSnapshot();
    });
  });
});
