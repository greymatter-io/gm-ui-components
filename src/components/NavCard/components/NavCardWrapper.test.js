import React from "react";
import { shallow } from "enzyme";
import NavCardWrapper from "./NavCardWrapper";

describe("NavCardWrapper", () => {
  it("matches snapshot", () => {
    const aNavCardWrapper = shallow(<NavCardWrapper />);
    expect(aNavCardWrapper).toMatchSnapshot();
  });
});
