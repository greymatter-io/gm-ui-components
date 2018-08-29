import React from "react";
import { shallow } from "enzyme";

import IconLock from "./IconLock";

describe("IconLock", () => {
  it("matches snapshot", () => {
    const aIconLock = shallow(<IconLock />);
    expect(aIconLock).toMatchSnapshot();
  });
});