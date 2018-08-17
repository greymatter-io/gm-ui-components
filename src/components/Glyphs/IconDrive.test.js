import React from "react";
import { shallow } from "enzyme";

import IconDrive from "./IconDrive";

describe("IconDrive", () => {
  it("matches snapshot", () => {
    const aIconDrive = shallow(<IconDrive />);
    expect(aIconDrive).toMatchSnapshot();
  });
});