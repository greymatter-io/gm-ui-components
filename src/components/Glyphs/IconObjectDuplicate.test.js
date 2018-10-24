import React from "react";
import { shallow } from "enzyme";
import IconObjectDuplicate from "./IconObjectDuplicate.svg";
describe("IconObjectDuplicate", () => {
  it("matches snapshot", () => {
    
    const aIconObjectDuplicate = shallow(<IconObjectDuplicate />).find("IconObjectDuplicate.svg").dive();
    console.log(aIconObjectDuplicate.debug())
    expect(aIconObjectDuplicate).toMatchSnapshot();
  });
});