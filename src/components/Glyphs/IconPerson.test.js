import React from "react";
import { shallow } from "enzyme";
import IconPerson from "./IconPerson.svg";
describe("IconPerson", () => {
  it("matches snapshot", () => {
    
    const aIconPerson = shallow(<IconPerson />).find("IconPerson.svg").dive();
    console.log(aIconPerson.debug())
    expect(aIconPerson).toMatchSnapshot();
  });
});