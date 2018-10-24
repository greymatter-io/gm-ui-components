import React from "react";
import { shallow } from "enzyme";

import IconFolderGroup from "./IconFolderGroup.svg";

describe("IconFolderGroup", () => {
  it("matches snapshot", () => {
    const aIconFolderGroup = shallow(<IconFolderGroup />);
    expect(aIconFolderGroup).toMatchSnapshot();
  });
});