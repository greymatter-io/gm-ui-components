import React from "react";
import { shallow } from "enzyme";
import IconNLP from "./IconNLP.svg";
describe("IconNLP", () => {
  it("matches snapshot", () => {
    
    const aIconNLP = shallow(<IconNLP />).find("IconNLP.svg").dive();
    console.log(aIconNLP.debug())
    expect(aIconNLP).toMatchSnapshot();
  });
});