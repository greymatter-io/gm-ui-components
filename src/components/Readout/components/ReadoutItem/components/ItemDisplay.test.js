import React from "react";

import ItemDisplay from "./ItemDisplay";

describe("ItemDisplay", () => {
  it("matches snapshot", () => {
    const aItemDisplay = shallow(<ItemDisplay />);
    expect(aItemDisplay).toMatchSnapshot();
  });
});
