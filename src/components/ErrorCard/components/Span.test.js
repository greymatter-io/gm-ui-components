import React from "react";
import { shallow } from "enzyme";
import Span from "./Span";

describe("Span", () => {
  it("matches snapshot", () => {
    const aSpan = shallow(<Span />);
    expect(aSpan).toMatchSnapshot();
  });
});
