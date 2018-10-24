import React from "react";
import { shallow } from "enzyme";

import IconEKG from "./IconEKG.svg";

describe("IconEKG", () => {
  it("matches snapshot", () => {
    const aIconEKG = shallow(<IconEKG />).find("IconEKG.svg");
    expect(aIconEKG).toMatchSnapshot();
  });
});