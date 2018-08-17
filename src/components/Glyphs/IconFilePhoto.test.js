import React from "react";
import { shallow } from "enzyme";

import IconFilePhoto from "./IconFilePhoto";

describe("IconFilePhoto", () => {
  it("matches snapshot", () => {
    const aIconFilePhoto = shallow(<IconFilePhoto />);
    expect(aIconFilePhoto).toMatchSnapshot();
  });
});