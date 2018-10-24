import React from "react";
import { shallow } from "enzyme";

import IconObservation from "./IconObservation.svg";

describe("IconObservation", () => {
  it("matches snapshot", () => {
    const aIconObservation = shallow(<IconObservation />).find("IconObservation.svg");
    expect(aIconObservation).toMatchSnapshot();
  });
});