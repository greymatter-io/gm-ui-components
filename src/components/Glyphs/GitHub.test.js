import React from "react";
import { shallow } from "enzyme";
import GitHub from "./GitHub";

describe("GitHub", () => {
  it("matches snapshot", () => {
    const aGitHub = shallow(<GitHub />);
    expect(aGitHub).toMatchSnapshot();
  });
});
