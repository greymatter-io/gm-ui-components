import React from "react";
import { shallow } from "enzyme";

import Glyph from "./index";
import Bell from "./components/Bell";

describe("Glyph", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Glyph glyphColor="#f55900" name="Bell" ratio={1} />);
  });

  test("returns a Glyph corresponding to the name prop", () => {
    expect(wrapper.find(Bell)).toHaveLength(1);
  });

  test("returns a Glyph with a fill corresponding to the glyphColor prop", () => {
    expect(wrapper.find("g").props().fill).toBe("#f55900");
  });

  test("returns a Glyph with a scale corresponding to the ratio prop", () => {
    expect(
      wrapper
        .find("g")
        .props()
        .transform.includes("scale(1)")
    ).toBe(true);
  });

  test("returns an empty <g> if a glyph name is not found", () => {
    wrapper = shallow(<Glyph name="Bell" />);
    expect(wrapper.find("g").props()).toMatchObject({});
  });
});
