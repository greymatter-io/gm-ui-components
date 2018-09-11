import React from "react";
import { shallow } from "enzyme";

import IconFileVideo from "./IconFileVideo";

describe("IconFileVideo", () => {
  it("matches snapshot", () => {
    const aIconFileVideo = shallow(<IconFileVideo />);
    expect(aIconFileVideo).toMatchSnapshot();
  });
});