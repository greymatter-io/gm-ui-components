import React from "react";
import { shallow } from "enzyme";

import IconPerson from "./IconPerson";

describe("IconPerson", () => {
  it("matches snapshot", () => {
    const aIconPerson = shallow(<IconPerson />);
    expect(aIconPerson).toMatchSnapshot();
  });
});