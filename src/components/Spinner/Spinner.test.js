import React from "react";

import Spinner from "./Spinner";

describe("Spinner", () => {
  it("matches snapshot", () => {
    const aSpinner = shallow(<Spinner />);
    expect(aSpinner).toMatchSnapshot();
  });

  it("renders the correct styles when passed a vertical prop", () => {
    const aSpinner = mount(<Spinner orientation="vertical" />);
    const Progress = aSpinner.find("LoadingSpinner").find("Progress");
    expect(Progress).toHaveStyleRule(
      "font-size",
      "calc(var(--SPACING_BASE) * 6 * 1px)"
    );
  });

  it("renders the correct styles when passed a horizontal prop", () => {
    const aSpinner = mount(<Spinner orientation="horizontal" />);
    const Progress = aSpinner.find("LoadingSpinner").find("Progress");
    expect(Progress).toHaveStyleRule(
      "font-size",
      "calc(var(--SPACING_BASE) * 2 * 1px)"
    );
  });
});
