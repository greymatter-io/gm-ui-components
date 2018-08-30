import React from "react";
import { shallow } from "enzyme";

import IconObjectMail from "./IconObjectMail";

describe("IconObjectMail", () => {
  it("matches snapshot", () => {
    const aIconObjectMail = shallow(<IconObjectMail />);
    expect(aIconObjectMail).toMatchSnapshot();
  });
});