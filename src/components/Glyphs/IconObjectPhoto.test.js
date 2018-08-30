import React from "react";
import { shallow } from "enzyme";

import IconObjectPhoto from "./IconObjectPhoto";

describe("IconObjectPhoto", () => {
  it("matches snapshot", () => {
    const aIconObjectPhoto = shallow(<IconObjectPhoto />);
    expect(aIconObjectPhoto).toMatchSnapshot();
  });
});