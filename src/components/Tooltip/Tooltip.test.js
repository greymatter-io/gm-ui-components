import React from "react";
import { render } from "enzyme";

import Tooltip from "./Tooltip";

function renderTooltip(position) {
  return render(
    <Tooltip content="Hello!" position={position}>
      Hover over me
    </Tooltip>
  );
}

describe("Tooltip", () => {
  let wrapper = renderTooltip("top");

  it("correctly positions tooltip content based on position prop", () => {
    expect(wrapper).toMatchSnapshot();
    wrapper = renderTooltip("bottom");
    expect(wrapper).toMatchSnapshot();
    wrapper = renderTooltip("left");
    expect(wrapper).toMatchSnapshot();
    wrapper = renderTooltip("right");
    expect(wrapper).toMatchSnapshot();
  });

  it("renders a tooltip div with the correct content", () => {
    expect(wrapper.html().includes("Hello!")).toBe(true);
  });
});
