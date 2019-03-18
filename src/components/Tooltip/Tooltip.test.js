import React from "react";
import { shallow } from "enzyme";

import Tooltip from "./Tooltip";

function renderTooltip(position) {
  return shallow(
    <Tooltip content="Hello!" position={position}>
      Hover over me
    </Tooltip>
  );
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
    const wrapper = shallow(
      <Tooltip content="Hello!" position={"top"}>
        Hover over me
      </Tooltip>
    );
    expect(wrapper.html().includes("Hello!")).toBe(true);
  });
});
