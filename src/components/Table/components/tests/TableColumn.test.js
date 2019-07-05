import React from "react";

import TableColumn from "../TableColumn";

describe("<TableColumn />", () => {
  it("should match snapshot", () => {
    const aTableColumn = shallow(<TableColumn />);
    expect(aTableColumn).toMatchSnapshot();
  });
});
