import React from "react";
import { shallow } from "enzyme";

import { ErrorCard } from "../";

describe("ErrorCard", () => {
  it("matches snapshot", () => {
    const anErrorCard = shallow(<ErrorCard />);
    expect(anErrorCard).toMatchSnapshot();
  });
  it("renders an error message", () => {
    const aErrorCard = shallow(<ErrorCard errorMsg="Woopsie" />);
    expect(aErrorCard).toMatchSnapshot();
  });
});
