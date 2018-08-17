import React from "react";
import { shallow } from "enzyme";

import IconObjectPresentation from "./IconObjectPresentation";

describe("IconObjectPresentation", () => {
  it("matches snapshot", () => {
    const aIconObjectPresentation = shallow(<IconObjectPresentation />);
    expect(aIconObjectPresentation).toMatchSnapshot();
  });
});