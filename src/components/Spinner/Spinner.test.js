import React from "react";
import { shallow } from "enzyme";
import Spinner from "./Spinner";

describe("Spinner", () => {
  it("matches snapshot", () => {
    const aSpinner = shallow(<Spinner />).dive();
    expect(aSpinner).toMatchSnapshot();
  });

  it("renders the correct styles when passed a vertical prop", () => {
    const aSpinner = shallow(
      <Spinner orientation="vertical" theme={{ brandColor: "blue" }} />
    );

    const SpinnerSVG = aSpinner
      .find("LoadingSpinner")
      .dive()
      .find("SpinnerSVG");

    expect(SpinnerSVG).toHaveStyleRule("width", "48px");
    expect(SpinnerSVG).toHaveStyleRule("height", "48px");
  });

  it("renders the correct styles when passed a horizontal prop", () => {
    const aSpinner = shallow(
      <Spinner orientation="horizontal" theme={{ brandColor: "blue" }} />
    );
    const SpinnerSVG = aSpinner
      .find("LoadingSpinner")
      .dive()
      .find("SpinnerSVG");

    expect(SpinnerSVG).toHaveStyleRule("width", "16px");
    expect(SpinnerSVG).toHaveStyleRule("height", "16px");
  });
});
