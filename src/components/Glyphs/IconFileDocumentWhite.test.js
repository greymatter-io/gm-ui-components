import React from "react";
import { shallow } from "enzyme";

import IconFileDocumentWhite from "./IconFileDocumentWhite";

describe("IconFileDocumentWhite", () => {
  it("matches snapshot", () => {
    const aIconFileDocumentWhite = shallow(<IconFileDocumentWhite />);
    expect(aIconFileDocumentWhite).toMatchSnapshot();
  });
});