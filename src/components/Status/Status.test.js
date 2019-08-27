import React from "react";
import "jest-styled-components";

import { keen } from "style/theme";

import Status from "./Status";

describe("Status", () => {
  it("matches snapshot", () => {
    const aStatus = shallow(<Status />);
    expect(aStatus).toMatchSnapshot();
  });
});

describe("Layout", () => {
  const aDefaultStatus = shallow(<Status theme={keen} />);
  expect(aDefaultStatus.find("Wrap")).toHaveStyleRule("display", "grid");
  expect(aDefaultStatus.find("Graphic").html()).toContain(
    "color",
    keen.COLOR_INTENT_HIGHLIGHT
  );

  const aBlockComponent = shallow(<Status isBlock />);
  // expect(aBlockComponent).toHaveStyleRule("display", "flex");

  const anErrorStatus = shallow(<Status statusType="error" />);
  // expect(anErrorStatus).toHaveStyleRule("display", "flex");
});

// if there's a message, it shows a message.

// if there's a detail, it shows the detail.

// if it's status: warning, it uses the warning color.

// if there's a custom graphic, it shows the graphic.
