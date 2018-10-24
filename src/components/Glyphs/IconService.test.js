import React from "react";
import { shallow } from "enzyme";

import IconService from "./IconService.svg";

describe("IconService", () => {
  it("matches snapshot", () => {
    const aIconService = shallow(<IconService />);
    expect(aIconService).toMatchSnapshot();
  });
});