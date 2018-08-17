import React from "react";
import { shallow } from "enzyme";

import IconObjectAudio from "./IconObjectAudio";

describe("IconObjectAudio", () => {
  it("matches snapshot", () => {
    const aIconObjectAudio = shallow(<IconObjectAudio />);
    expect(aIconObjectAudio).toMatchSnapshot();
  });
});