import React from "react";
import { shallow } from "enzyme";

import CheckboxBox from "./CheckboxBox";

describe("CheckboxBox", () => {
  it("should render", () => {
    const aCheckboxBox = shallow(<CheckboxBox />);
    expect(aCheckboxBox).toMatchSnapshot();
  });
});
