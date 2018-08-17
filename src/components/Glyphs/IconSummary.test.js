import React from "react";
import { shallow } from "enzyme";

import IconSummary from "./IconSummary";

describe("IconSummary", () => {
  it("matches snapshot", () => {
    const aIconSummary = shallow(<IconSummary />);
    expect(aIconSummary).toMatchSnapshot();
  });
});