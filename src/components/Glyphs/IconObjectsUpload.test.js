import React from "react";
import { shallow } from "enzyme";

import IconObjectsUpload from "./IconObjectsUpload";

describe("IconObjectsUpload", () => {
  it("matches snapshot", () => {
    const aIconObjectsUpload = shallow(<IconObjectsUpload />);
    expect(aIconObjectsUpload).toMatchSnapshot();
  });
});