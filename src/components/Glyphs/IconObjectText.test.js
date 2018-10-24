import React from "react";
import { shallow } from "enzyme";

import IconObjectText from "./IconObjectText.svg";

describe("IconObjectText", () => {
  it("matches snapshot", () => {
    const aIconObjectText = shallow(<IconObjectText />);
    expect(aIconObjectText).toMatchSnapshot();
  });
});