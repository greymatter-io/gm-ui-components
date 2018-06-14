import React from "react";
import { shallow } from "enzyme";
import HeaderBreadcrumbs from "./HeaderBreadcrumbs";

describe("HeaderBreadcrumbs", () => {
  it("matches snapshot", () => {
    const aHeaderBreadcrumbs = shallow(<HeaderBreadcrumbs />);
    expect(aHeaderBreadcrumbs).toMatchSnapshot();
  });
});
