import React from "react";
import { shallow } from "enzyme";
import IconFileDownload from "./IconFileDownload.svg";
describe("IconFileDownload", () => {
  it("matches snapshot", () => {
    
    const aIconFileDownload = shallow(<IconFileDownload />).find("IconFileDownload.svg").dive();
    console.log(aIconFileDownload.debug())
    expect(aIconFileDownload).toMatchSnapshot();
  });
});