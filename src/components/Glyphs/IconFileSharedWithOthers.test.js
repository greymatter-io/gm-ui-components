import React from "react";
import { shallow } from "enzyme";

import IconFileSharedWithOthers from "./IconFileSharedWithOthers";

describe("IconFileSharedWithOthers", () => {
  it("matches snapshot", () => {
    const aIconFileSharedWithOthers = shallow(<IconFileSharedWithOthers />);
    expect(aIconFileSharedWithOthers).toMatchSnapshot();
  });
});