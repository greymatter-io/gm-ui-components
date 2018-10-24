import React from "react";
import { shallow } from "enzyme";

import IconFilesFind from "./IconFilesFind.svg";

describe("IconFilesFind", () => {
  it("matches snapshot", () => {
    const aIconFilesFind = shallow(<IconFilesFind />).find("IconFilesFind.svg");
    expect(aIconFilesFind).toMatchSnapshot();
  });
});