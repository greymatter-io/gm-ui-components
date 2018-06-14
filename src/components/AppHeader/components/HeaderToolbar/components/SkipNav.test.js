import React from "react";
import { shallow, mount } from "enzyme";
import SkipNav from "./SkipNav";

describe("SkipNav", () => {
  test("matches snapshot", () => {
    const aSkipNav = shallow(<SkipNav />);
    expect(aSkipNav).toMatchSnapshot();
  });
  test("calls onKeyDown", () => {
    const onKeyDown = jest.fn();
    const aSkipNav = shallow(
      <SkipNav skipToId={"main-content"} onKeyDown={onKeyDown} />
    );
    aSkipNav.find("button").simulate("keyDown", { keyCode: 13 });
    expect(onKeyDown).toHaveBeenCalled();
  });
  test("focuses on the provided skipToId element", () => {
    const div = document.createElement("div");
    window.domNode = div;
    document.body.appendChild(div);
    const jestSpy = jest.fn();
    const aSkipNav = mount(
      <div>
        <SkipNav skipToId={"main-content"} />
        <div id="main-content" tabIndex="0" onFocus={jestSpy} />
      </div>,
      { attachTo: window.domNode }
    );
    aSkipNav.find("SkipNav").simulate("keyDown", { keyCode: 13 });
    expect(jestSpy).toHaveBeenCalled();
    expect(jestSpy.mock.calls).toHaveLength(1);
    aSkipNav.find("SkipNav").simulate("keyDown", { keyCode: 32 });
    expect(jestSpy.mock.calls).toHaveLength(2);
  });
});
