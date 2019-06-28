import React from "react";
import { mount } from "enzyme";
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

    wrapper = mount(
      <Collapse title="Collapse title">
        <div height="300px">Collapse children</div>
      </Collapse>
    );
  });

  it("matches snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("opens/closes on click when uncontrolled", () => {
    wrapper.find("Header").simulate("click");

    expect(wrapper.find("Body").html()).toContain("height", "300px");

    // click again to test that the body closes
    wrapper.find("Header").simulate("click");

    expect(wrapper.find("Body").html()).toContain("height", "0px");
  });

  it("does not open/close on click when controlled by the isOpen prop", () => {
    wrapper.find("Header").simulate("click");

    expect(wrapper.find("Body").html()).toContain("height", "0px");
    // inverted test
    wrapper = mount(
      <Collapse title="Collapse title" isOpen={true}>
        <div height="300px">Collapse children</div>
      </Collapse>
    );

    wrapper.find("Header").simulate("click");

    expect(wrapper.find("Body").html()).toContain("height", "0px");
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

  it.only("calls the onClick function with the keydown event if provided", () => {
    let onClickSpy = jest.fn();
    wrapper = mount(
      <Collapse title="Collapse title" isOpen={false} onClick={onClickSpy}>
        <div height="300px">Collapse children</div>
      </Collapse>
    );
    wrapper.find("Header").simulate("keyDown", { keyCode: 13 });
    expect(onClickSpy).toHaveBeenCalled();
    expect(onClickSpy).toBeTruthy();

    wrapper.find("Header").simulate("keyDown", { keyCode: 32 });
    expect(onClickSpy).toHaveBeenCalled();
    expect(onClickSpy).toBeTruthy();
  });
});
