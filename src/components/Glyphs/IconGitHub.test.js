import React from "react";
import { shallow } from "enzyme";
import IconGitHub from "./IconGitHub.svg";
describe("IconGitHub", () => {
  it("matches snapshot", () => {
    
    const aIconGitHub = shallow(<IconGitHub />).find("IconGitHub.svg").dive();
    console.log(aIconGitHub.debug())
    expect(aIconGitHub).toMatchSnapshot();
  });
});