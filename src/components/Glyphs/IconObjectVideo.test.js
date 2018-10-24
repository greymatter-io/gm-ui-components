import React from "react";
import { shallow } from "enzyme";
import IconObjectVideo from "./IconObjectVideo.svg";
describe("IconObjectVideo", () => {
  it("matches snapshot", () => {
    
    const aIconObjectVideo = shallow(<IconObjectVideo />).find("IconObjectVideo.svg").dive();
    console.log(aIconObjectVideo.debug())
    expect(aIconObjectVideo).toMatchSnapshot();
  });
});