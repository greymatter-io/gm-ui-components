import React from "react";
import { shallow } from "enzyme";

import InputUrl from "./InputUrl";

describe("InputUrl", () => {
  it("matches snapshot", () => {
    const aInputUrl = shallow(<InputUrl label="Test" clickAction={() => {}} />);
    expect(aInputUrl).toMatchSnapshot();
  });
});
