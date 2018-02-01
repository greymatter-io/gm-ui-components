import React from "react";
import { shallow } from "enzyme";
import Card from "./Card";

describe("Card", () => {
  it("matches snapshot", () => {
    const aCard = shallow(<Card />);
    expect(aCard).toMatchSnapshot();
  });
});
