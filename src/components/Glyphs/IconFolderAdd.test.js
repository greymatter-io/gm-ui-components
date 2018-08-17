import React from "react";
import { shallow } from "enzyme";

import IconFolderAdd from "./IconFolderAdd";

describe("IconFolderAdd", () => {
  it("matches snapshot", () => {
    const aIconFolderAdd = shallow(<IconFolderAdd />);
    expect(aIconFolderAdd).toMatchSnapshot();
  });
});