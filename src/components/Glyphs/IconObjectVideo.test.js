import React from "react";
import { shallow } from "enzyme";

import IconObjectVideo from "./IconObjectVideo";

describe("IconObjectVideo", () => {
  it("matches snapshot", () => {
    const aIconObjectVideo = shallow(<IconObjectVideo />);
    expect(aIconObjectVideo).toMatchSnapshot();
  });
});