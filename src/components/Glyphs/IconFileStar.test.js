import React from "react";
import { shallow } from "enzyme";

import IconFileStar from "./IconFileStar.svg";

describe("IconFileStar", () => {
  it("matches snapshot", () => {
    const aIconFileStar = shallow(<IconFileStar />);
    expect(aIconFileStar).toMatchSnapshot();
  });
});