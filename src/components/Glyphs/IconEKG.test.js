import React from "react";
import { shallow } from "enzyme";

import IconEKG from "./IconEKG";

describe("IconEKG", () => {
  it("matches snapshot", () => {
    const aIconEKG = shallow(<IconEKG />);
    expect(aIconEKG).toMatchSnapshot();
  });
});