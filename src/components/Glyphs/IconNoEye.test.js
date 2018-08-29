import React from "react";
import { shallow } from "enzyme";

import IconNoEye from "./IconNoEye";

describe("IconNoEye", () => {
  it("matches snapshot", () => {
    const aIconNoEye = shallow(<IconNoEye />);
    expect(aIconNoEye).toMatchSnapshot();
  });
});