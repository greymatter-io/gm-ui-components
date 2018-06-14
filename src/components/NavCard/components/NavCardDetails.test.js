import React from "react";
import { shallow } from "enzyme";
import NavCardDetails from "./NavCardDetails";

describe("NavCardDetails", () => {
  it("matches snapshot", () => {
    const aNavCardDetails = shallow(<NavCardDetails />);
    expect(aNavCardDetails).toMatchSnapshot();
  });
});
