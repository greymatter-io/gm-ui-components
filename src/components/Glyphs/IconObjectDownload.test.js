import React from "react";
import { shallow } from "enzyme";

import IconObjectDownload from "./IconObjectDownload";

describe("IconObjectDownload ", () => {
  it("matches snapshot", () => {
    const aIconObjectDownload = shallow(<IconObjectDownload />);
    expect(aIconObjectDownload).toMatchSnapshot();
  });
});
