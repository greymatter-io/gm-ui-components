import React from "react";
import { shallow } from "enzyme";

import IconTrash from "./IconTrash";

describe("IconTrash", () => {
  it("matches snapshot", () => {
    const aIconTrash = shallow(<IconTrash />);
    expect(aIconTrash).toMatchSnapshot();
  });
});