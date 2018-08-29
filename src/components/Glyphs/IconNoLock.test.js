import React from "react";
import { shallow } from "enzyme";

import IconNoLock from "./IconNoLock";

describe("IconNoLock", () => {
  it("matches snapshot", () => {
    const aIconNoLock = shallow(<IconNoLock />);
    expect(aIconNoLock).toMatchSnapshot();
  });
});