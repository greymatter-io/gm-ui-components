import React from "react";
import { shallow } from "enzyme";

import IconSummary from "./IconSummary.svg";

describe("IconSummary", () => {
  it("matches snapshot", () => {
    const aIconSummary = shallow(<IconSummary />);
    expect(aIconSummary).toMatchSnapshot();
  });
});