import React from "react";
import { shallow } from "enzyme";

import TableColumn from "../TableColumn";

describe("<TableColumn />", () => {
  it("should match snapshot", () => {
    const aTableColumn = shallow(<TableColumn />);
    expect(aTableColumn).toMatchSnapshot();
  });
});
