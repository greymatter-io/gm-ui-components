import React from "react";
import { shallow } from "enzyme";

import IconMediaPlay from "./IconMediaPlay";

describe("IconMediaPlay", () => {
  it("matches snapshot", () => {
    const aIconMediaPlay = shallow(<IconMediaPlay />);
    expect(aIconMediaPlay).toMatchSnapshot();
  });
});