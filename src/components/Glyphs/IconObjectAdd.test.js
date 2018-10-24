import React from "react";
import { shallow } from "enzyme";
import IconObjectAdd from "./IconObjectAdd.svg";
describe("IconObjectAdd", () => {
  it("matches snapshot", () => {
    
    const aIconObjectAdd = shallow(<IconObjectAdd />).find("IconObjectAdd.svg").dive();
    console.log(aIconObjectAdd.debug())
    expect(aIconObjectAdd).toMatchSnapshot();
  });
});