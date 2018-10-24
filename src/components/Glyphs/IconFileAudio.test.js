import React from "react";
import { shallow } from "enzyme";
import IconFileAudio from "./IconFileAudio.svg";
describe("IconFileAudio", () => {
  it("matches snapshot", () => {
    
    const aIconFileAudio = shallow(<IconFileAudio />).find("IconFileAudio.svg").dive();
    console.log(aIconFileAudio.debug())
    expect(aIconFileAudio).toMatchSnapshot();
  });
});