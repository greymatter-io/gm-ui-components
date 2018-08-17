import React from "react";
import { shallow } from "enzyme";

import IconObjectUpload from "./IconObjectUpload";

describe("IconObjectUpload", () => {
  it("matches snapshot", () => {
    const aIconObjectUpload = shallow(<IconObjectUpload />);
    expect(aIconObjectUpload).toMatchSnapshot();
  });
});