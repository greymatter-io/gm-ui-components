import React from "react";
import { shallow } from "enzyme";
import IconUpload from "./IconUpload.svg";

describe("IconUpload", () => {
  it("matches snapshot", () => {
    const aIconUpload = shallow(<IconUpload />);
    console.log(aIconUpload.find("IconUpload.svg").length);
    expect(aIconUpload).toMatchSnapshot();
  });
});
