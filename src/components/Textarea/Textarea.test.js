import React from "react";

import Textarea from "./Textarea";

describe("Textarea", () => {
  it("matches snapshot", () => {
    const aTextarea = shallow(<Textarea label="Test" clickAction={() => {}} />);
    expect(aTextarea).toMatchSnapshot();
  });
});
