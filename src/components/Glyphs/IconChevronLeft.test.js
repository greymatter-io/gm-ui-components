import React from "react";
import { shallow } from "enzyme";

import IconChevronLeft from "./IconChevronLeft";

describe("IconChevronLeft", () => {
  it("matches snapshot", () => {
    const aIconChevronLeft = shallow(<IconChevronLeft />);
    expect(aIconChevronLeft).toMatchSnapshot();
  });
});