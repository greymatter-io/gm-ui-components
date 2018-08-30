import React from "react";
import { shallow } from "enzyme";

import IconFileGhost from "./IconFileGhost";

describe("IconFileGhost", () => {
  it("matches snapshot", () => {
    const aIconFileGhost = shallow(<IconFileGhost />);
    expect(aIconFileGhost).toMatchSnapshot();
  });
});