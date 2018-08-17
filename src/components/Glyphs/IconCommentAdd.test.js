import React from "react";
import { shallow } from "enzyme";

import IconCommentAdd from "./IconCommentAdd";

describe("IconCommentAdd", () => {
  it("matches snapshot", () => {
    const aIconCommentAdd = shallow(<IconCommentAdd />);
    expect(aIconCommentAdd).toMatchSnapshot();
  });
});