import React from "react";
import { shallow } from "enzyme";

import Wrapper from "./Wrapper";

describe("Wrapper", () => {
  it("should render", () => {
    const aWrapper = shallow(<Wrapper />);
    expect(aWrapper).toMatchSnapshot();
  });
});
