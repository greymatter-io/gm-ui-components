import React from "react";
import { shallow } from "enzyme";
import IconFolderShared from "./IconFolderShared.svg";
describe("IconFolderShared", () => {
  it("matches snapshot", () => {
    
    const aIconFolderShared = shallow(<IconFolderShared />).find("IconFolderShared.svg").dive();
    console.log(aIconFolderShared.debug())
    expect(aIconFolderShared).toMatchSnapshot();
  });
});