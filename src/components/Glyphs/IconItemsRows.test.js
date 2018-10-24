import React from "react";
import { shallow } from "enzyme";
import IconItemsRows from "./IconItemsRows.svg";
describe("IconItemsRows", () => {
  it("matches snapshot", () => {
    
    const aIconItemsRows = shallow(<IconItemsRows />).find("IconItemsRows.svg").dive();
    console.log(aIconItemsRows.debug())
    expect(aIconItemsRows).toMatchSnapshot();
  });
});