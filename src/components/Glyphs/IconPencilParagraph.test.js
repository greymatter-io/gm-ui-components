import React from "react";
import { shallow } from "enzyme";

import IconPencilParagraph from "./IconPencilParagraph.svg";

describe("IconPencilParagraph", () => {
  it("matches snapshot", () => {
    const aIconPencilParagraph = shallow(<IconPencilParagraph />);
    expect(aIconPencilParagraph).toMatchSnapshot();
  });
});