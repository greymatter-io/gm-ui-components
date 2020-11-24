import React from "react";

import * as components from "./index.js";

describe("Collapse components", () => {
  Object.keys(components).forEach((c) => {
    const C = components[c];
    it(`${C.displayName} should match snapshot`, () => {
      expect(shallow(<C />)).toMatchSnapshot();
    });
  });
});
