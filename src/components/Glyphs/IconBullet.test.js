import React from "react";
import { shallow } from "enzyme";

import IconBullet from "./IconBullet";

describe("IconBullet", () => {
  it("matches snapshot", () => {
    const aIconBullet = shallow(<IconBullet />);
    expect(aIconBullet).toMatchSnapshot();
  });
});