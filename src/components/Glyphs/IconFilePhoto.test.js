import React from "react";
import { shallow } from "enzyme";

import IconFilePhoto from "./IconFilePhoto.svg";

describe("IconFilePhoto", () => {
  it("matches snapshot", () => {
    const aIconFilePhoto = shallow(<IconFilePhoto />).find("IconFilePhoto.svg");
    expect(aIconFilePhoto).toMatchSnapshot();
  });
});