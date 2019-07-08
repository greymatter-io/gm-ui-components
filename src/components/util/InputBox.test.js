import React from "react";

import InputBox from "./InputBox";

describe("InputBox", () => {
  it("should render", () => {
    const aInputBox = shallow(<InputBox />);
    expect(aInputBox).toMatchSnapshot();
  });
});
