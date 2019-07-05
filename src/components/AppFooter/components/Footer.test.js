import React from "react";

import Footer from "./Footer";

describe("Footer", () => {
  it("should render", () => {
    const aFooter = shallow(<Footer />);
    expect(aFooter).toMatchSnapshot();
  });
});
