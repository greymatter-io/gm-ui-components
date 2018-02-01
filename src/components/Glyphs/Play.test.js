import React from "react";
import { shallow } from "enzyme";
import Play from "./Play";

describe("Play", () => {
  it("matches snapshot", () => {
    const aPlay = shallow(<Play />);
    expect(aPlay).toMatchSnapshot();
  });
});
