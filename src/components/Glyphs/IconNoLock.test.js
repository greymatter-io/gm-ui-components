import React from "react";
import { shallow } from "enzyme";

import IconNoLock from "./IconNoLock.svg";

describe("IconNoLock", () => {
  it("matches snapshot", () => {
    const aIconNoLock = shallow(<IconNoLock />).find("IconNoLock.svg");
    expect(aIconNoLock).toMatchSnapshot();
  });
});