import React from "react";

import LoadingMessage from "./LoadingMessage";

describe("LoadingMessage", () => {
  it("matches snapshot", () => {
    const aLoadingMessage = shallow(<LoadingMessage />);
    expect(aLoadingMessage).toMatchSnapshot();
  });
});
