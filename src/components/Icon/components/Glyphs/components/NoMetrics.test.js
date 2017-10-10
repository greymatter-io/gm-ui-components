import React from "react";
import { shallow } from "enzyme";
import NoMetrics from "./NoMetrics";

describe("NoMetrics", () => {
  it("matches snapshot", () => {
    const aNoMetrics = shallow(<NoMetrics />);
    expect(aNoMetrics).toMatchSnapshot();
  });
});
