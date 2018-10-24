import React from "react";
import { shallow } from "enzyme";

import IconFileSharedWithOthers from "./IconFileSharedWithOthers.svg";

describe("IconFileSharedWithOthers", () => {
  it("matches snapshot", () => {
    const aIconFileSharedWithOthers = shallow(<IconFileSharedWithOthers />).find("IconFileSharedWithOthers.svg");
    expect(aIconFileSharedWithOthers).toMatchSnapshot();
  });
});