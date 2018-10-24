import React from "react";
import { shallow } from "enzyme";

import IconTape from "./IconTape.svg";

describe("IconTape", () => {
  it("matches snapshot", () => {
    const aIconTape = shallow(<IconTape />).find("IconTape.svg");
    expect(aIconTape).toMatchSnapshot();
  });
});