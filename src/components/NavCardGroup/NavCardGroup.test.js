import React from "react";
import { shallow } from "enzyme";
import NavCardGroup from "./NavCardGroup";

describe("NavCardGroup", () => {
  it("matches snapshot", () => {
    const aNavCardGroup = shallow(<NavCardGroup />);
    expect(aNavCardGroup).toMatchSnapshot();
  });
});
