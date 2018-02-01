import React from "react";
import { shallow } from "enzyme";
import Negation from "./Negation";

describe("Negation", () => {
  it("matches snapshot", () => {
    const aNegation = shallow(<Negation />);
    expect(aNegation).toMatchSnapshot();
  });
});
