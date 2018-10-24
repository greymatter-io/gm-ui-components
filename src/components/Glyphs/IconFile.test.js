import React from "react";
import { shallow } from "enzyme";

import IconFile from "./IconFile.svg";

describe("IconFile", () => {
  it("matches snapshot", () => {
    const aIconFile = shallow(<IconFile />);
    expect(aIconFile).toMatchSnapshot();
  });
});