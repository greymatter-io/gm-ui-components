import React from "react";


import Entity from "./Entity";

describe("Entity", () => {
  it("matches snapshot", () => {
    const aEntity = shallow(<Entity />);
    expect(aEntity).toMatchSnapshot();
  });
});