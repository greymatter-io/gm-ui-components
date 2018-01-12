import React from "react";
import { shallow } from "enzyme";
import ButtonLabelSuffix from "./ButtonLabelSuffix";

describe("ButtonLabelSuffix", () => {
  it("matches snapshot", () => {
    const aButtonLabelSuffix = shallow(<ButtonLabelSuffix />);
    expect(aButtonLabelSuffix).toMatchSnapshot();
  });
});
