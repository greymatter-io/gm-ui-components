import React from "react";
import { shallow } from "enzyme";

import * as components from ".";

describe("Collapse components", () => {
  Object.keys(components).forEach(c => {
    const C = components[c];
    it(`${C.displayName} should match snapshot`, () => {
      expect(shallow(<C />)).toMatchSnapshot();
    });
  });
});
