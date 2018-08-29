import React from "react";
import { shallow } from "enzyme";

import IconArrowLeftSmall from "./IconArrowLeftSmall";

describe("IconArrowLeftSmall", () => {
  it("matches snapshot", () => {
    const aIconArrowLeftSmall = shallow(<IconArrowLeftSmall />);
    expect(aIconArrowLeftSmall).toMatchSnapshot();
  });
});