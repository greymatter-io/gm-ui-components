import React from "react";
import { shallow } from "enzyme";
import IconCard from "./IconCard.svg";
describe("IconCard", () => {
  it("matches snapshot", () => {
    
    const aIconCard = shallow(<IconCard />).find("IconCard.svg").dive();
    console.log(aIconCard.debug())
    expect(aIconCard).toMatchSnapshot();
  });
});