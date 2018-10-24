import React from "react";
import { shallow } from "enzyme";

import IconObjectPlay from "./IconObjectPlay.svg";

describe("IconObjectPlay", () => {
  it("matches snapshot", () => {
    const aIconObjectPlay = shallow(<IconObjectPlay />).find("IconObjectPlay.svg");
    expect(aIconObjectPlay).toMatchSnapshot();
  });
});