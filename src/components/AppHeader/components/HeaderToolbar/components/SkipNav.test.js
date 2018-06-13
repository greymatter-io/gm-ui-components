import React from "react";
import { shallow } from "enzyme";
import SkipNav from "./SkipNav";

describe("SkipNav", () => {
  it("matches snapshot", () => {
    const aSkipNav = shallow(<SkipNav />);
    expect(aSkipNav).toMatchSnapshot();
  });
  it("calls onKeyDown", () => {
    const onKeyDown = jest.fn();
    const aSkipNav = shallow(
      <SkipNav skipToId={"main-content"} onKeyDown={onKeyDown} />
    );
    aSkipNav.find("button").simulate("keyDown", { keyCode: 13 });
    expect(onKeyDown).toHaveBeenCalled();
  });
});
