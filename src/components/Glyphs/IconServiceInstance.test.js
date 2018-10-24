import React from "react";
import { shallow } from "enzyme";

import IconServiceInstance from "./IconServiceInstance.svg";

describe("IconServiceInstance", () => {
  it("matches snapshot", () => {
    const aIconServiceInstance = shallow(<IconServiceInstance />);
    expect(aIconServiceInstance).toMatchSnapshot();
  });
});