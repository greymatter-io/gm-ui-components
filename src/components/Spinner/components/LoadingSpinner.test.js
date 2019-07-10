import React from "react";

import LoadingSpinner from "./LoadingSpinner";

describe("LoadingSpinner", () => {
  it("matches snapshot", () => {
    const aLoadingSpinner = shallow(<LoadingSpinner />);
    expect(aLoadingSpinner).toMatchSnapshot();
  });
});
