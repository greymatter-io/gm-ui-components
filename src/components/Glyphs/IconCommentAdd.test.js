import React from "react";
import { shallow } from "enzyme";
import IconCommentAdd from "./IconCommentAdd.svg";
describe("IconCommentAdd", () => {
  it("matches snapshot", () => {
    
    const aIconCommentAdd = shallow(<IconCommentAdd />).find("IconCommentAdd.svg").dive();
    console.log(aIconCommentAdd.debug())
    expect(aIconCommentAdd).toMatchSnapshot();
  });
});