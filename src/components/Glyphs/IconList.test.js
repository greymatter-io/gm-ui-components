import React from "react";
import { shallow } from "enzyme";
import IconList from "./IconList.svg";
describe("IconList", () => {
  it("matches snapshot", () => {
    
    const aIconList = shallow(<IconList />).find("IconList.svg").dive();
    console.log(aIconList.debug())
    expect(aIconList).toMatchSnapshot();
  });
});