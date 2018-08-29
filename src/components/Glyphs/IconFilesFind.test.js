import React from "react";
import { shallow } from "enzyme";

import IconFilesFind from "./IconFilesFind";

describe("IconFilesFind", () => {
  it("matches snapshot", () => {
    const aIconFilesFind = shallow(<IconFilesFind />);
    expect(aIconFilesFind).toMatchSnapshot();
  });
});