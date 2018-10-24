import React from "react";
import { shallow } from "enzyme";

import IconArrowLeft from "./IconArrowLeft.svg";

describe("IconArrowLeft", () => {
  it("matches snapshot", () => {
    const aIconArrowLeft = shallow(<IconArrowLeft />).find("IconArrowLeft.svg");
    expect(aIconArrowLeft).toMatchSnapshot();
  });
});