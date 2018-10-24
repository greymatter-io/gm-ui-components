import React from "react";
import { shallow } from "enzyme";

import IconEllipsisHorizontal from "./IconEllipsisHorizontal.svg";

describe("IconEllipsisHorizontal", () => {
  it("matches snapshot", () => {
    const aIconEllipsisHorizontal = shallow(<IconEllipsisHorizontal />);
    expect(aIconEllipsisHorizontal).toMatchSnapshot();
  });
});