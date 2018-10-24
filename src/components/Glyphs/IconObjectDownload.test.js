import React from "react";
import { shallow } from "enzyme";
import IconObjectDownload from "./IconObjectDownload.svg";
describe("IconObjectDownload", () => {
  it("matches snapshot", () => {
    
    const aIconObjectDownload = shallow(<IconObjectDownload />).find("IconObjectDownload.svg").dive();
    console.log(aIconObjectDownload.debug())
    expect(aIconObjectDownload).toMatchSnapshot();
  });
});