import React from "react";
import { shallow } from "enzyme";
import IconFinagle from "./IconFinagle.svg";
describe("IconFinagle", () => {
  it("matches snapshot", () => {
    
    const aIconFinagle = shallow(<IconFinagle />).find("IconFinagle.svg").dive();
    console.log(aIconFinagle.debug())
    expect(aIconFinagle).toMatchSnapshot();
  });
});