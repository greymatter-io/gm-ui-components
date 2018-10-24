import React from "react";
import { shallow } from "enzyme";

import IconFileSharedWithMe from "./IconFileSharedWithMe.svg";

describe("IconFileSharedWithMe", () => {
  it("matches snapshot", () => {
    const aIconFileSharedWithMe = shallow(<IconFileSharedWithMe />);
    expect(aIconFileSharedWithMe).toMatchSnapshot();
  });
});