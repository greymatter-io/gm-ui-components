import React from "react";
import { shallow } from "enzyme";

import TableWrapper from "../TableWrapper";

describe("<TableWrapper />", () => {
  it("should match snapshot", () => {
    const aTableWrapper = shallow(<TableWrapper />);
    expect(aTableWrapper).toMatchSnapshot();
  });
});
