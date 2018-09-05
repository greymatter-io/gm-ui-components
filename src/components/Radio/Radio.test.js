import React from "react";
import { shallow } from "enzyme";

import Radio from "./Radio";

describe("Radio", () => {
  it("should render", () => {
    const aRadio = shallow(<Radio label="label" />).dive();
    expect(aRadio).toMatchSnapshot();
  });

  it("should different positions", () => {
    const positions = ["left", "right", "top", "bottom"];

    positions.forEach(position => {
      const aRadio = shallow(
        <Radio label="label" position={position} />
      ).dive();
      expect(aRadio).toMatchSnapshot();
    });
  });
});
