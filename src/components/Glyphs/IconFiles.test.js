import React from "react";
import { shallow } from "enzyme";

import IconFiles from "./IconFiles";

describe("IconFiles", () => {
  it("matches snapshot", () => {
    const aIconFiles = shallow(<IconFiles />);
    expect(aIconFiles).toMatchSnapshot();
  });
});