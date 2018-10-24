import React from "react";
import { shallow } from "enzyme";

import IconCalendar from "./IconCalendar.svg";

describe("IconCalendar", () => {
  it("matches snapshot", () => {
    const aIconCalendar = shallow(<IconCalendar />).find("IconCalendar.svg");
    expect(aIconCalendar).toMatchSnapshot();
  });
});