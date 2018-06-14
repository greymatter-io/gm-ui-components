import React from "react";
import { shallow } from "enzyme";
import NavCardLink from "./NavCardLink";

describe("NavCardLink", () => {
  it("matches snapshot", () => {
    const aNavCardLink = shallow(<NavCardLink to="/" />);
    expect(aNavCardLink).toMatchSnapshot();
  });
});
