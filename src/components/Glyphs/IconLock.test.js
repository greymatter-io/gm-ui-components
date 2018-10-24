import React from "react";
import { shallow } from "enzyme";
import IconLock from "./IconLock.svg";
describe("IconLock", () => {
  it("matches snapshot", () => {
    
    const aIconLock = shallow(<IconLock />).find("IconLock.svg").dive();
    console.log(aIconLock.debug())
    expect(aIconLock).toMatchSnapshot();
  });
});