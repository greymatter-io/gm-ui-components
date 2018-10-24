import React from "react";
import { shallow } from "enzyme";
import IconMediaPlay from "./IconMediaPlay.svg";
describe("IconMediaPlay", () => {
  it("matches snapshot", () => {
    
    const aIconMediaPlay = shallow(<IconMediaPlay />).find("IconMediaPlay.svg").dive();
    console.log(aIconMediaPlay.debug())
    expect(aIconMediaPlay).toMatchSnapshot();
  });
});