import React from "react";
import { shallow } from "enzyme";

import IconObjectPhoto from "./IconObjectPhoto.svg";

describe("IconObjectPhoto", () => {
  it("matches snapshot", () => {
    const aIconObjectPhoto = shallow(<IconObjectPhoto />);
    expect(aIconObjectPhoto).toMatchSnapshot();
  });
});