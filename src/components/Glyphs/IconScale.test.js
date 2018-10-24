import React from "react";
import { shallow } from "enzyme";

import IconScale from "./IconScale.svg";

describe("IconScale", () => {
  it("matches snapshot", () => {
    const aIconScale = shallow(<IconScale />);
    expect(aIconScale).toMatchSnapshot();
  });
});