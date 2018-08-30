import React from "react";
import { shallow } from "enzyme";

import IconGRPC from "./IconGRPC";

describe("IconGRPC", () => {
  it("matches snapshot", () => {
    const aIconGRPC = shallow(<IconGRPC />);
    expect(aIconGRPC).toMatchSnapshot();
  });
});