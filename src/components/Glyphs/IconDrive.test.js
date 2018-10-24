import React from "react";
import { shallow } from "enzyme";

import IconDrive from "./IconDrive.svg";

describe("IconDrive", () => {
  it("matches snapshot", () => {
    const aIconDrive = shallow(<IconDrive />);
    expect(aIconDrive).toMatchSnapshot();
  });
});