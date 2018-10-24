import React from "react";
import { shallow } from "enzyme";

import IconObjectDocument from "./IconObjectDocument.svg";

describe("IconObjectDocument", () => {
  it("matches snapshot", () => {
    const aIconObjectDocument = shallow(<IconObjectDocument />).find("IconObjectDocument.svg");
    expect(aIconObjectDocument).toMatchSnapshot();
  });
});