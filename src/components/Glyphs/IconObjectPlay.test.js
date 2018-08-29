import React from "react";
import { shallow } from "enzyme";

import IconObjectPlay from "./IconObjectPlay";

describe("IconObjectPlay", () => {
  it("matches snapshot", () => {
    const aIconObjectPlay = shallow(<IconObjectPlay />);
    expect(aIconObjectPlay).toMatchSnapshot();
  });
});