import React from "react";
import { shallow } from "enzyme";

import IconObjectAdd from "./IconObjectAdd";

describe("IconObjectAdd", () => {
  it("matches snapshot", () => {
    const aIconObjectAdd = shallow(<IconObjectAdd />);
    expect(aIconObjectAdd).toMatchSnapshot();
  });
});