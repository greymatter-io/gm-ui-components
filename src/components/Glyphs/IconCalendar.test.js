import React from "react";
import { shallow } from "enzyme";
import IconCalendar from "./IconCalendar.svg";
describe("IconCalendar", () => {
  it("matches snapshot", () => {
    
    const aIconCalendar = shallow(<IconCalendar />).find("IconCalendar.svg").dive();
    console.log(aIconCalendar.debug())
    expect(aIconCalendar).toMatchSnapshot();
  });
});