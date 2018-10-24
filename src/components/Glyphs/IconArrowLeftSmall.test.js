import React from "react";
import { shallow } from "enzyme";
import IconArrowLeftSmall from "./IconArrowLeftSmall.svg";
describe("IconArrowLeftSmall", () => {
  it("matches snapshot", () => {
    
    const aIconArrowLeftSmall = shallow(<IconArrowLeftSmall />).find("IconArrowLeftSmall.svg").dive();
    console.log(aIconArrowLeftSmall.debug())
    expect(aIconArrowLeftSmall).toMatchSnapshot();
  });
});