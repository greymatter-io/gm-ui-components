import React from "react";
import { shallow } from "enzyme";

import IconNoEye from "./IconNoEye.svg";

describe("IconNoEye", () => {
  it("matches snapshot", () => {
    const aIconNoEye = shallow(<IconNoEye />).find("IconNoEye.svg");
    expect(aIconNoEye).toMatchSnapshot();
  });
});