import React from "react";
import { shallow } from "enzyme";
import IconFilesSharedWithMe from "./IconFilesSharedWithMe.svg";
describe("IconFilesSharedWithMe", () => {
  it("matches snapshot", () => {
    
    const aIconFilesSharedWithMe = shallow(<IconFilesSharedWithMe />).find("IconFilesSharedWithMe.svg").dive();
    console.log(aIconFilesSharedWithMe.debug())
    expect(aIconFilesSharedWithMe).toMatchSnapshot();
  });
});