import React from "react";


import Status from "./Status";

describe("Status", () => {
  it("matches snapshot", () => {
    const aStatus = shallow(<Status />);
    expect(aStatus).toMatchSnapshot();
  });
});