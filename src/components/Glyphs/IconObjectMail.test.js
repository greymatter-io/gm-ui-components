import React from "react";
import { shallow } from "enzyme";
import IconObjectMail from "./IconObjectMail.svg";
describe("IconObjectMail", () => {
  it("matches snapshot", () => {
    
    const aIconObjectMail = shallow(<IconObjectMail />).find("IconObjectMail.svg").dive();
    console.log(aIconObjectMail.debug())
    expect(aIconObjectMail).toMatchSnapshot();
  });
});