import React from "react";
import { shallow } from "enzyme";

import IconIngressEgress from "./IconIngressEgress";

describe("IconIngressEgress", () => {
  it("matches snapshot", () => {
    const aIconIngressEgress = shallow(<IconIngressEgress />);
    expect(aIconIngressEgress).toMatchSnapshot();
  });
});