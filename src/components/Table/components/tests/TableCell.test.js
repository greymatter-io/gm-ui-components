import React from "react";

import TableCell from "../TableCell";

describe("<TableCell />", () => {
  it("should match snapshot", () => {
    const aTableCell = shallow(<TableCell />);
    expect(aTableCell).toMatchSnapshot();
  });
});
