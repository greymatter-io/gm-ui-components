import React from "react";
import { shallow } from "enzyme";

import IconObjectDocument from "./IconObjectDocument";

describe("IconObjectDocument", () => {
  it("matches snapshot", () => {
    const aIconObjectDocument = shallow(<IconObjectDocument />);
    expect(aIconObjectDocument).toMatchSnapshot();
  });
});