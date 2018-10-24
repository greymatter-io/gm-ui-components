import React from "react";
import { shallow } from "enzyme";

import IconClassTopSecret from "./IconClassTopSecret.svg";

describe("IconClassTopSecret", () => {
  it("matches snapshot", () => {
    const aIconClassTopSecret = shallow(<IconClassTopSecret />).find("IconClassTopSecret.svg");
    expect(aIconClassTopSecret).toMatchSnapshot();
  });
});