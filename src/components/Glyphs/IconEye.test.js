import React from "react";
import { shallow } from "enzyme";

import IconEye from "./IconEye.svg";

describe("IconEye", () => {
  it("matches snapshot", () => {
    const aIconEye = shallow(<IconEye />);
    expect(aIconEye).toMatchSnapshot();
  });
});