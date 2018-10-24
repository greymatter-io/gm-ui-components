import React from "react";
import { shallow } from "enzyme";

import IconTrash from "./IconTrash.svg";

describe("IconTrash", () => {
  it("matches snapshot", () => {
    const aIconTrash = shallow(<IconTrash />);
    expect(aIconTrash).toMatchSnapshot();
  });
});