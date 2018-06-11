import React from "react";
import { mount, render } from "enzyme";

import Button from "./Button";
import ButtonWrap from "./components/ButtonWrap";

const types = ["danger", "info", "primary", "warning"];
const sizes = ["normal", "xs", "sm", "lg", "xl"];
const orientations = ["vertical", "horizontal"];

const props = {
  active: false,
  clickAction: () => {},
  disabled: false,
  label: "Button",
  labelStyle: {},
  orientation: "horizontal",
  outline: false,
  prefix: "pre",
  size: "normal",
  style: {},
  suffix: "suff",
  tabIndex: 0,
  type: "primary"
};

describe("Button", () => {
  describe("Snapshots", () => {
    test("matches type snapshots", () => {
      let tree;
      types.forEach(type => {
        tree = render(
          <Button type={type} label={type} key={type} clickAction={() => {}} />
        );
        expect(tree).toMatchSnapshot();
      });
    });

    test("matches outline snapshots", () => {
      let tree = render(
        <Button outline={true} label={"outline"} clickAction={() => {}} />
      );
      expect(tree).toMatchSnapshot();
    });

    test("matches size snapshots", () => {
      let tree;
      sizes.forEach(size => {
        tree = render(
          <Button size={size} label={size} key={size} clickAction={() => {}} />
        );
        expect(tree).toMatchSnapshot();
      });
    });

    test("matches orientation snapshots", () => {
      let tree;
      orientations.forEach(orientation => {
        tree = render(
          <Button
            orientation={orientation}
            label={orientation}
            key={orientation}
            clickAction={() => {}}
          />
        );
        expect(tree).toMatchSnapshot();
      });
    });

    test("matches prefix/suffix snapshot", () => {
      let tree = (
        <Button
          prefix="Prefix"
          suffix="Suffix"
          label="Button"
          clickAction={() => {}}
        />
      );
      expect(tree).toMatchSnapshot();
    });

    test("matches active snapshot", () => {
      let tree = <Button active label="Button" clickAction={() => {}} />;
      expect(tree).toMatchSnapshot();
    });

    test("matches disabled snapshot", () => {
      let tree = <Button disabled label="Button" clickAction={() => {}} />;
      expect(tree).toMatchSnapshot();
    });
  });

  describe("Props", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = mount(<Button {...props}>{["Hello World"]}</Button>);
    });

    test("passes correct props to ButtonWrap", () => {
      expect(wrapper.find(ButtonWrap).props()).toMatchObject({
        active: false,
        disabled: false,
        onClick: wrapper.props().clickAction,
        orientation: "horizontal",
        outline: false,
        size: "normal",
        style: {},
        tabIndex: 0,
        title: "Button",
        type: "primary"
      });
    });

    test("renders children", () => {
      expect(wrapper.html().includes("Hello World")).toBe(true);
    });
  });
});
