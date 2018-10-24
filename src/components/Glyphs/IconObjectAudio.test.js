import React from "react";
import { shallow } from "enzyme";

import IconObjectAudio from "./IconObjectAudio.svg";

describe("IconObjectAudio", () => {
  it("matches snapshot", () => {
    const aIconObjectAudio = shallow(<IconObjectAudio />).find("IconObjectAudio.svg");
    expect(aIconObjectAudio).toMatchSnapshot();
  });
});