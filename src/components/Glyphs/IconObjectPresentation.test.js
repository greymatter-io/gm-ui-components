import React from "react";
import { shallow } from "enzyme";
import IconObjectPresentation from "./IconObjectPresentation.svg";
describe("IconObjectPresentation", () => {
  it("matches snapshot", () => {
    
    const aIconObjectPresentation = shallow(<IconObjectPresentation />).find("IconObjectPresentation.svg").dive();
    console.log(aIconObjectPresentation.debug())
    expect(aIconObjectPresentation).toMatchSnapshot();
  });
});