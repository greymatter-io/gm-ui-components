import React from "react";
import { shallow } from "enzyme";

import TableCell from "../TableCell";

describe("<TableCell />", () => {
  it("should match snapshot", () => {
    const aTableCell = shallow(<TableCell />);
    expect(aTableCell).toMatchSnapshot();
  });
});
