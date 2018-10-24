import React from "react";
import { shallow } from "enzyme";
import IconDrive from "./IconDrive.svg";
describe("IconDrive", () => {
  it("matches snapshot", () => {
    
    const aIconDrive = shallow(<IconDrive />).find("IconDrive.svg").dive();
    console.log(aIconDrive.debug())
    expect(aIconDrive).toMatchSnapshot();
  });
});