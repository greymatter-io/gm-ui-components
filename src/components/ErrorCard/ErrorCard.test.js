import React from "react";
import { shallow } from "enzyme";

import { ErrorCard, IconBell } from "../";

describe("ErrorCard", () => {
  it("matches snapshot", () => {
    const anErrorCard = shallow(<ErrorCard />);
    expect(anErrorCard).toMatchSnapshot();
  });
  it("renders an error message", () => {
    const aErrorCard = shallow(<ErrorCard errorMsg="Woopsie" />);
    expect(aErrorCard).toMatchSnapshot();
  });
  it("renders a default Icon", () => {
    const aErrorCard = shallow(<ErrorCard />);
    expect(aErrorCard.find("IconMock")).toHaveLength(1);
  });
  it("renders a custom Icon", () => {
    const aErrorCard = shallow(<ErrorCard icon={() => <IconBell />} />);
    expect(aErrorCard.find("IconMock")).toHaveLength(1);
  });
});
