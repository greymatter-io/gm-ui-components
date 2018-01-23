import React from "react";
import { shallow } from "enzyme";
import EditGraph from "./EditGraph";

describe("EditGraph", () => {
  it("matches snapshot", () => {
    const aEditGraph = shallow(<EditGraph />);
    expect(aEditGraph).toMatchSnapshot();
  });
});
