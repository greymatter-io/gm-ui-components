import React from "react";
import { shallow } from "enzyme";

import LoadingSpinner from "./LoadingSpinner";

const theme = {
  COLOR_BRAND_A: "red",
  COLOR_BACKGROUND_A: "blue"
};

describe("LoadingSpinner", () => {
  it("matches snapshot", () => {
    const aLoadingSpinner = shallow(<LoadingSpinner theme={theme} />);
    expect(aLoadingSpinner).toMatchSnapshot();
  });
});
