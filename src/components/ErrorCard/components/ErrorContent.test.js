import React from "react";

import ErrorContent from "./ErrorContent";

describe("ErrorContent", () => {
  it("matches snapshot", () => {
    const aErrorContent = shallow(<ErrorContent />);
    expect(aErrorContent).toMatchSnapshot();
  });
});
