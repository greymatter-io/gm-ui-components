import React from "react";
import { shallow } from "enzyme";

import IconPencil from "./IconPencil.svg";

describe("IconPencil", () => {
  it("matches snapshot", () => {
    const aIconPencil = shallow(<IconPencil />);
    expect(aIconPencil).toMatchSnapshot();
  });
});