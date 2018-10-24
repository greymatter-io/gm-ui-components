import React from "react";
import { shallow } from "enzyme";
import IconFilePhoto from "./IconFilePhoto.svg";
describe("IconFilePhoto", () => {
  it("matches snapshot", () => {
    
    const aIconFilePhoto = shallow(<IconFilePhoto />).find("IconFilePhoto.svg").dive();
    console.log(aIconFilePhoto.debug())
    expect(aIconFilePhoto).toMatchSnapshot();
  });
});