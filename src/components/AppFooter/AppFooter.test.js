import React from "react";
import { shallow } from "enzyme";
import FooterContainer from "./index.js";

describe("A Footer container", () => {
  it("should render", () => {
    const aFooterContainer = shallow(<FooterContainer />);
    expect(aFooterContainer).toMatchSnapshot();
  });
});
