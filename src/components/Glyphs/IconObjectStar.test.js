import React from "react";
import { shallow } from "enzyme";
import IconObjectStar from "./IconObjectStar.svg";
describe("IconObjectStar", () => {
  it("matches snapshot", () => {
    
    const aIconObjectStar = shallow(<IconObjectStar />).find("IconObjectStar.svg").dive();
    console.log(aIconObjectStar.debug())
    expect(aIconObjectStar).toMatchSnapshot();
  });
});