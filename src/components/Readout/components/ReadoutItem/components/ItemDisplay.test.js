import React from "react";
import { shallow } from "enzyme";
import ItemDisplay from "./ItemDisplay";

describe("ItemDisplay", () => {
  it("matches snapshot", () => {
    const aItemDisplay = shallow(<ItemDisplay />);
    expect(aItemDisplay).toMatchSnapshot();
  });
  it("allows flex value to be overridden", () => {
    const aItemDisplay = shallow(<ItemDisplay flex="0 0 100%" />);
    expect(aItemDisplay).toHaveStyleRule("flex", "0 0 100%");
  });
});
