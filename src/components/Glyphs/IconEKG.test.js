import React from "react";
import { shallow } from "enzyme";
import IconEKG from "./IconEKG.svg";
describe("IconEKG", () => {
  it("matches snapshot", () => {
    
    const aIconEKG = shallow(<IconEKG />).find("IconEKG.svg").dive();
    console.log(aIconEKG.debug())
    expect(aIconEKG).toMatchSnapshot();
  });
});