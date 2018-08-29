import React from "react";
import { shallow } from "enzyme";

import IconClassTopSecret from "./IconClassTopSecret";

describe("IconClassTopSecret", () => {
  it("matches snapshot", () => {
    const aIconClassTopSecret = shallow(<IconClassTopSecret />);
    expect(aIconClassTopSecret).toMatchSnapshot();
  });
});