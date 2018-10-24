import React from "react";
import { shallow } from "enzyme";

import IconList from "./IconList.svg";

describe("IconList", () => {
  it("matches snapshot", () => {
    const aIconList = shallow(<IconList />);
    expect(aIconList).toMatchSnapshot();
  });
});