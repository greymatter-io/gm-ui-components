import React from "react";
import { shallow } from "enzyme";
import IconFolderAdd from "./IconFolderAdd.svg";
describe("IconFolderAdd", () => {
  it("matches snapshot", () => {
    
    const aIconFolderAdd = shallow(<IconFolderAdd />).find("IconFolderAdd.svg").dive();
    console.log(aIconFolderAdd.debug())
    expect(aIconFolderAdd).toMatchSnapshot();
  });
});