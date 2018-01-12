import React from "react";
import { shallow } from "enzyme";
import ButtonLabelPrefix from "./ButtonLabelPrefix";

describe("ButtonLabelPrefix", () => {
  it("matches snapshot", () => {
    const aButtonLabelPrefix = shallow(<ButtonLabelPrefix />);
    expect(aButtonLabelPrefix).toMatchSnapshot();
  });
});
