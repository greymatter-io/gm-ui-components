import React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer";

describe("Footer", () => {
  it("should render", () => {
    const aFooter = shallow(<Footer />);
    expect(aFooter).toMatchSnapshot();
  });
});
