import React from "react";
import { shallow } from "enzyme";

import IconGRPC from "./IconGRPC.svg";

describe("IconGRPC", () => {
  it("matches snapshot", () => {
    const aIconGRPC = shallow(<IconGRPC />);
    expect(aIconGRPC).toMatchSnapshot();
  });
});