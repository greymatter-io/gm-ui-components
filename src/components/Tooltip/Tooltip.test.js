import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { render } from "enzyme";

import Tooltip from "./Tooltip";

function renderTooltip(position) {
  return renderer
    .create(
      <Tooltip content="Hello!" position={position}>
        Hover over me
      </Tooltip>
    )
    .toJSON();
}

describe("Tooltip", () => {
  let tree = renderTooltip("top");

  it("correctly positions tooltip content based on position prop", () => {
    expect(tree).toMatchSnapshot();
    tree = renderTooltip("bottom");
    expect(tree).toMatchSnapshot();
    tree = renderTooltip("left");
    expect(tree).toMatchSnapshot();
    tree = renderTooltip("right");
    expect(tree).toMatchSnapshot();
  });

  it("renders a tooltip div with the correct content", () => {
    const wrapper = render(
      <Tooltip content="Hello!" position={"top"}>
        Hover over me
      </Tooltip>
    );
    expect(wrapper.html().includes("Hello!")).toBe(true);
  });
});
