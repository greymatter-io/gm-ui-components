import React from "react";

import Spinner from "./Spinner";
import { mount } from "enzyme";

describe("Spinner", () => {
  it("matches snapshot", () => {
    const aSpinner = shallow(<Spinner />);
    expect(aSpinner).toMatchSnapshot();
  });

  it("renders the correct styles when passed a vertical prop", () => {
    const aSpinner = mount(<Spinner orientation="vertical" />);
    const SpinnerSVG = aSpinner.find("LoadingSpinner").find("SpinnerSVG");
    expect(SpinnerSVG).toHaveStyleRule(
      "width",
      "calc(var(--SPACING_BASE) * 6 * 1px)"
    );
    expect(SpinnerSVG).toHaveStyleRule(
      "height",
      "calc(var(--SPACING_BASE) * 6 * 1px)"
    );
  });

  it("renders the correct styles when passed a horizontal prop", () => {
    const aSpinner = mount(<Spinner orientation="horizontal" />);
    const SpinnerSVG = aSpinner.find("LoadingSpinner").find("SpinnerSVG");
    expect(SpinnerSVG).toHaveStyleRule(
      "width",
      "calc(var(--SPACING_BASE) * 2 * 1px)"
    );
    expect(SpinnerSVG).toHaveStyleRule(
      "height",
      "calc(var(--SPACING_BASE) * 2 * 1px)"
    );
  });
});
