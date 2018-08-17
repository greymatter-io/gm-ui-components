import React from "react";
import { shallow } from "enzyme";

import IconFolderShared from "./IconFolderShared";

describe("IconFolderShared", () => {
  it("matches snapshot", () => {
    const aIconFolderShared = shallow(<IconFolderShared />);
    expect(aIconFolderShared).toMatchSnapshot();
  });
});