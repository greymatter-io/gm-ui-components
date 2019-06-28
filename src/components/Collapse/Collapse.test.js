import React from "react";
import { shallow, mount } from "enzyme";
import { act } from "react-dom/test-utils";
import Collapse from "./Collapse";

describe("Collapse", () => {
  let wrapper;
  beforeEach(() => {
    // mock out dom method
    Element.prototype.getBoundingClientRect = jest.fn(() => {
      return {
        height: 300
      };
    });

    // it's necessary to use `mount` because of the useEffect hook
    // https://github.com/airbnb/enzyme/issues/2086
    wrapper = mount(
      <Collapse title="Collapse title">
        <div height="300px">Collapse children</div>
      </Collapse>
    );
  });

  it("matches snapshot", () => {
    const aCollapse = shallow(
      <Collapse title="Collapse title">
        <div>Collapse children</div>
      </Collapse>
    ).dive();
    expect(aCollapse).toMatchSnapshot();
  });

  it("opens/closes on click when uncontrolled", () => {
    // act() makes this test run closer to how React works in the browser.
    // if we don't use it, state isn't updated ¯\_(ツ)_/¯
    act(() => {
      wrapper.find("Header").simulate("click");
    });
    // force a rerender
    wrapper.update();
    expect(wrapper.find("Body")).toHaveStyleRule("height", "300px");

    // click again to test that the body closes
    act(() => {
      wrapper.find("Header").simulate("click");
    });
    wrapper.update();
    expect(wrapper.find("Body")).toHaveStyleRule("height", "0px");
  });

  it("does not open/close on click when controlled by the isOpen prop", () => {
    wrapper = mount(
      <Collapse title="Collapse title" isOpen={false}>
        <div height="300px">Collapse children</div>
      </Collapse>
    );

    act(() => {
      wrapper.find("Header").simulate("click");
    });
    // force a rerender
    wrapper.update();
    expect(wrapper.find("Body")).toHaveStyleRule("height", "0px");

    // inverted test
    wrapper = mount(
      <Collapse title="Collapse title" isOpen={true}>
        <div height="300px">Collapse children</div>
      </Collapse>
    );

    act(() => {
      wrapper.find("Header").simulate("click");
    });
    // force a rerender
    wrapper.update();
    expect(wrapper.find("Body")).toHaveStyleRule("height", "300px");
  });

  it("calls the onClick function with the click event if provided", () => {
    let onClickSpy = jest.fn();
    wrapper = mount(
      <Collapse title="Collapse title" isOpen={false} onClick={onClickSpy}>
        <div height="300px">Collapse children</div>
      </Collapse>
    );
    wrapper.find("Header").simulate("click");
    expect(onClickSpy).toHaveBeenCalled();
    expect(onClickSpy).toBeTruthy();
  });
});
