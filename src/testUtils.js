import React from "react";
import { ThemeProvider } from "styled-components";
import { keen } from "style/theme";
import { shallow } from "enzyme";

export const shallowClone = (tree, context) => {
  if (tree.type.componentStyle !== undefined) {
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
  return shallow(tree, context);
};
