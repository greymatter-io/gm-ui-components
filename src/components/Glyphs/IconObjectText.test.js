import React from "react";
import { shallow } from "enzyme";

import IconObjectText from "./IconObjectText";

describe("IconObjectText", () => {
  it("matches snapshot", () => {
    const aIconObjectText = shallow(<IconObjectText />);
    expect(aIconObjectText).toMatchSnapshot();
  });
});