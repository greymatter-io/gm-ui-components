import React from "react";
import { shallow } from "enzyme";

import Wrap from "../Wrap";

describe("<Wrap />", () => {
  it("should match snapshot", () => {
    const aWrap = shallow(<Wrap />);
    expect(aWrap).toMatchSnapshot();
  });
});
