import React from "react";
import { shallow } from "enzyme";

import IconStarFilled from "./IconStarFilled";

describe("IconStarFilled", () => {
  it("matches snapshot", () => {
    const aIconStarFilled = shallow(<IconStarFilled />);
    expect(aIconStarFilled).toMatchSnapshot();
  });
});