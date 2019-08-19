import React from "react";


import Selectable from "./Selectable";

describe("Selectable", () => {
  it("matches snapshot", () => {
    const aSelectable = shallow(<Selectable />);
    expect(aSelectable).toMatchSnapshot();
  });
});