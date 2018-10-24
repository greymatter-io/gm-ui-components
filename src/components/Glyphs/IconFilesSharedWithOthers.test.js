import React from "react";
import { shallow } from "enzyme";

import IconFilesSharedWithOthers from "./IconFilesSharedWithOthers.svg";

describe("IconFilesSharedWithOthers", () => {
  it("matches snapshot", () => {
    const aIconFilesSharedWithOthers = shallow(<IconFilesSharedWithOthers />).find("IconFilesSharedWithOthers.svg");
    expect(aIconFilesSharedWithOthers).toMatchSnapshot();
  });
});