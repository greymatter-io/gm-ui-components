import React from "react";
import { shallow } from "enzyme";
import Close from "./Close";

describe("Close", () => {
  it("matches snapshot", () => {
    const aClose = shallow(<Close />);
    expect(aClose).toMatchSnapshot();
  });
});
