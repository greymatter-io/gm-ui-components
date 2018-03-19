import React from "react";
import renderer from "react-test-renderer";
import ButtonGroup from "./ButtonGroup";
import "jest-styled-components";

describe("ButtonGroup", () => {
  it("matches snapshot", () => {
    const aButtonGroup = renderer.create(<ButtonGroup />).toJSON();
    expect(aButtonGroup).toMatchSnapshot();
  });
});
