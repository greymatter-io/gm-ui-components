import React from "react";
import { shallow } from "enzyme";
import IconObjectPhoto from "./IconObjectPhoto.svg";
describe("IconObjectPhoto", () => {
  it("matches snapshot", () => {
    
    const aIconObjectPhoto = shallow(<IconObjectPhoto />).find("IconObjectPhoto.svg").dive();
    console.log(aIconObjectPhoto.debug())
    expect(aIconObjectPhoto).toMatchSnapshot();
  });
});