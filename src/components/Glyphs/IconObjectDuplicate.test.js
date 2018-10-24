import React from "react";
import { shallow } from "enzyme";

import IconObjectDuplicate from "./IconObjectDuplicate.svg";

describe("IconObjectDuplicate", () => {
  it("matches snapshot", () => {
    const aIconObjectDuplicate = shallow(<IconObjectDuplicate />);
    expect(aIconObjectDuplicate).toMatchSnapshot();
  });
});