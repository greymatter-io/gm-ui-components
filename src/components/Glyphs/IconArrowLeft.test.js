import React from "react";
import { shallow } from "enzyme";

import IconArrowLeft from "./IconArrowLeft";

describe("IconArrowLeft", () => {
  it("matches snapshot", () => {
    const aIconArrowLeft = shallow(<IconArrowLeft />);
    expect(aIconArrowLeft).toMatchSnapshot();
  });
});