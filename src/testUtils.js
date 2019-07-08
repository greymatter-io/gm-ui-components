// eslint-disable-next-line no-unused-vars
import React from "react";
import { shallow } from "enzyme";

// This is a temporary helper that returns a shallow rendered tree at the correct depth.
// Style-components automatically wrap themselves with a context provider when they are considered "dynamic",
// i.e., there is some props interpolation that needs to happen at runtime. This function aims to provide a
// consistent experience when testing so the developer doesn't have to worry about how many times to .dive().
export const shallowClone = (tree, context) => {
  // If the component is a styled-component
  if (tree.type.componentStyle !== undefined) {
    // and if the sc does not have any interpolations, only dive twice
    if (tree.type.componentStyle.isStatic) {
      return shallow(tree, context)
        .dive()
        .dive();
    } else {
      return shallow(tree, context)
        .dive()
        .dive()
        .dive();
    }
  }
  // otherwise just return the
  return shallow(tree, context);
};
