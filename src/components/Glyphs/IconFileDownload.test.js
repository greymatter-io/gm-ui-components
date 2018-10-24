import React from "react";
import { shallow } from "enzyme";

import IconFileDownload from "./IconFileDownload.svg";

describe("IconFileDownload", () => {
  it("matches snapshot", () => {
    const aIconFileDownload = shallow(<IconFileDownload />);
    expect(aIconFileDownload).toMatchSnapshot();
  });
});