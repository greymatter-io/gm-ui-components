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

const TestTruncated = (
  <Breadcrumbs maxItems={3}>
    <BreadcrumbItem>This is a really long breadcrumb</BreadcrumbItem>
    <BreadcrumbItem>Test 1</BreadcrumbItem>
    <BreadcrumbItem>Test 2</BreadcrumbItem>
    <BreadcrumbItem>Test 3</BreadcrumbItem>
  </Breadcrumbs>
);

const ExpandedBreadcrumbTree = renderer.create(TestExpanded).toJSON();
const TruncatedBreadcrumbTree = renderer.create(TestTruncated).toJSON();

describe("<Breadcrumbs> Snapshots", () => {
  test("it renders expanded breadcrumbs correctly", () => {
    expect(ExpandedBreadcrumbTree).toMatchSnapshot();
  });
  test("it renders truncated breadcrumbs correctly", () => {
    expect(TruncatedBreadcrumbTree).toMatchSnapshot();
  });
});

describe("<Breadcrumbs> Functionality", () => {
  let wrapper, instance;

  beforeEach(() => {
    wrapper = shallow(TestTruncated);
    instance = wrapper.instance();
  });

  test("truncates when children are greater than maxItems", () => {
    expect(wrapper.state("isTruncated")).toEqual(true);
    expect(wrapper.find(BreadcrumbItem).length).toBe(3);
  });

  test("it does not truncate when children are less than maxItems", () => {
    wrapper.setProps({ maxItems: 5 });
    expect(wrapper.state("isTruncated")).toEqual(false);
    expect(wrapper.find(BreadcrumbItem).length).toBe(4);
  });

  test("it expands when elipsis is clicked", () => {
    wrapper.find(Elipsis).simulate("click");
    expect(wrapper.state("isTruncated")).toEqual(false);
  });
  test("a single breadcrumb is not longer than 20 characters", () => {
    wrapper.find(BreadcrumbItem).forEach(item => {
      expect(
        item
          .dive()
          .dive()
          .text().length
      ).toBeLessThanOrEqual(23);
    });
  });
});
