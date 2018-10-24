import React from "react";
import { shallow } from "enzyme";
import IconIngressEgress from "./IconIngressEgress.svg";
describe("IconIngressEgress", () => {
  it("matches snapshot", () => {
    
    const aIconIngressEgress = shallow(<IconIngressEgress />).find("IconIngressEgress.svg").dive();
    console.log(aIconIngressEgress.debug())
    expect(aIconIngressEgress).toMatchSnapshot();
  });
});