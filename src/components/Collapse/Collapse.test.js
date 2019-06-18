import React from "react";
import { shallow } from "enzyme";

import Accordion from "./Collapse";

describe("Accordion", () => {
  it("matches snapshot", () => {
    const aAccordion = shallow(<Accordion />);
    expect(aAccordion).toMatchSnapshot();
  });
});
