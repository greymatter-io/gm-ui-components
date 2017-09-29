import React from "react";
import styled from "styled-components";
import renderer from "react-test-renderer";
import { Breadcrumbs, BreadcrumbItem } from "./index.js";
import { Elipsis } from "./Breadcrumbs";
import { mount, shallow } from "enzyme";
import "jest-styled-components";

const TestExpanded = (
  <Breadcrumbs maxItems={10}>
    <BreadcrumbItem>Test 1</BreadcrumbItem>
    <BreadcrumbItem>Test 2</BreadcrumbItem>
    <BreadcrumbItem>Test 3</BreadcrumbItem>
  </Breadcrumbs>
);

const TestCollapsed = (
  <Breadcrumbs maxItems={3}>
    <BreadcrumbItem>This is a really long breadcrumb</BreadcrumbItem>
    <BreadcrumbItem>Test 1</BreadcrumbItem>
    <BreadcrumbItem>Test 2</BreadcrumbItem>
    <BreadcrumbItem>Test 3</BreadcrumbItem>
  </Breadcrumbs>
);

const ExpandedBreadcrumbTree = renderer.create(TestExpanded).toJSON();
const CollapsedBreadcrumbTree = renderer.create(TestCollapsed).toJSON();

describe("<Breadcrumbs> Snapshot", () => {
  test("it renders expanded breadcrumbs correctly", () => {
    expect(ExpandedBreadcrumbTree).toMatchSnapshot();
  });
  test("renders collapsed breadcrumbs correctly", () => {
    expect(CollapsedBreadcrumbTree).toMatchSnapshot();
  });
});

describe("<Breadcrumbs>", () => {
  let wrapper, instance;

  beforeEach(() => {
    wrapper = shallow(TestCollapsed);
    instance = wrapper.instance();
  });

  test("collapse when children are greater than maxItems", () => {
    expect(wrapper.state("isCollapsed")).toEqual(true);
    expect(wrapper.find(BreadcrumbItem).length).toBe(3);
  });

  test("do not collapse when children are less than maxItems", () => {
    wrapper.setProps({ maxItems: 5 });
    expect(wrapper.state("isCollapsed")).toEqual(false);
    expect(wrapper.find(BreadcrumbItem).length).toBe(4);
  });

  test("expand when elipsis is clicked", () => {
    wrapper.find(Elipsis).simulate("click");
    expect(wrapper.state("isCollapsed")).toEqual(false);
  });
  test("a single breadcrumb is not longer than 20 characters", () => {
    wrapper.find(BreadcrumbItem).forEach(item => {
      expect(
        item
          .dive()
          .dive()
          .text().length
      ).toBeLessThanOrEqual(23);
      // 23 includes the elipsis...
    });
  });
});
