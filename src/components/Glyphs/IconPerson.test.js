import React from "react";
import { shallow } from "enzyme";

import IconPerson from "./IconPerson.svg";

describe("IconPerson", () => {
  it("matches snapshot", () => {
    const aIconPerson = shallow(<IconPerson />);
    expect(aIconPerson).toMatchSnapshot();
  });
});