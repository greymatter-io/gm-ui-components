import React from "react";
import { shallow } from "enzyme";

import IconObjectGhost from "./IconObjectGhost";

describe("IconObjectGhost", () => {
  it("matches snapshot", () => {
    const aIconObjectGhost = shallow(<IconObjectGhost />);
    expect(aIconObjectGhost).toMatchSnapshot();
  });
});