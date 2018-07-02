import React from "react";
import renderer from "react-test-renderer";
import { Breadcrumbs, BreadcrumbItem } from "./index.js";
import { shallow } from "enzyme";


const crumbs = [
  "Test 1",
  "Test 2",
  "Test 3",
  "Testing a really long breadcrumb item"
];

const TestExpanded = <Breadcrumbs maxItems={10} crumbs={crumbs} />;
const TestCollapsed = <Breadcrumbs maxItems={3} crumbs={crumbs} />;

const ExpandedBreadcrumbTree = renderer.create(TestExpanded).toJSON();
const CollapsedBreadcrumbTree = renderer.create(TestCollapsed).toJSON();

describe("<Breadcrumbs> Snapshot", () => {
  test("renders expanded breadcrumbs correctly", () => {
    expect(ExpandedBreadcrumbTree).toMatchSnapshot();
  });
  test("renders collapsed breadcrumbs correctly", () => {
    expect(CollapsedBreadcrumbTree).toMatchSnapshot();
  });
});

describe("<Breadcrumbs>", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(TestCollapsed);
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
    wrapper
      .find({ item: "..." })
      .dive()
      .simulate("click");
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
