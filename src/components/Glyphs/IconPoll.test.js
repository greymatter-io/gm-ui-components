import React from "react";
import { shallow } from "enzyme";
import IconPoll from "./IconPoll.svg";
describe("IconPoll", () => {
  it("matches snapshot", () => {
    
    const aIconPoll = shallow(<IconPoll />).find("IconPoll.svg").dive();
    console.log(aIconPoll.debug())
    expect(aIconPoll).toMatchSnapshot();
  });
});