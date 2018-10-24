import React from "react";
import { shallow } from "enzyme";
import IconTrash from "./IconTrash.svg";
describe("IconTrash", () => {
  it("matches snapshot", () => {
    
    const aIconTrash = shallow(<IconTrash />).find("IconTrash.svg").dive();
    console.log(aIconTrash.debug())
    expect(aIconTrash).toMatchSnapshot();
  });
});