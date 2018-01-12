import React from "react";
import { shallow } from "enzyme";
import BorderTriangleSmall from "./BorderTriangleSmall";

describe("BorderTriangleSmall", () => {
  it("matches snapshot", () => {
    const aBorderTriangleSmall = shallow(<BorderTriangleSmall />);
    expect(aBorderTriangleSmall).toMatchSnapshot();
  });
});
