import React from "react";
import { shallow } from "enzyme";

import IconFileDocument from "./IconFileDocument";

describe("IconFileDocument", () => {
  it("matches snapshot", () => {
    const aIconFileDocument = shallow(<IconFileDocument />);
    expect(aIconFileDocument).toMatchSnapshot();
  });
});