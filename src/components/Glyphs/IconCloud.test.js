import React from "react";
import { shallow } from "enzyme";

import IconCloud from "./IconCloud.svg";

describe("IconCloud", () => {
  it("matches snapshot", () => {
    const aIconCloud = shallow(<IconCloud />).find("IconCloud.svg");
    expect(aIconCloud).toMatchSnapshot();
  });
});