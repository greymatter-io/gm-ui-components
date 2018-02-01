import React from "react";
import { shallow } from "enzyme";
import NoKey from "./NoKey";

describe("NoKey", () => {
  it("matches snapshot", () => {
    const aNoKey = shallow(<NoKey />);
    expect(aNoKey).toMatchSnapshot();
  });
});
