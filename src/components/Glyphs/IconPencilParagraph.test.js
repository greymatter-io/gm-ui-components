import React from "react";
import { shallow } from "enzyme";

import IconPencilParagraph from "./IconPencilParagraph.svg";

describe("IconPencilParagraph", () => {
  it("matches snapshot", () => {
    const aIconPencilParagraph = shallow(<IconPencilParagraph />).find("IconPencilParagraph.svg");
    expect(aIconPencilParagraph).toMatchSnapshot();
  });
});