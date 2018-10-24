import React from "react";
import { shallow } from "enzyme";

import IconFilePresentation from "./IconFilePresentation.svg";

describe("IconFilePresentation", () => {
  it("matches snapshot", () => {
    const aIconFilePresentation = shallow(<IconFilePresentation />);
    expect(aIconFilePresentation).toMatchSnapshot();
  });
});