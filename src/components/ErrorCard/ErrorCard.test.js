import React from "react";
import { shallow } from "enzyme";

import { ErrorCard, Bell } from "../";

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
    expect(aErrorCard.find("Exclamation")).toHaveLength(1);
  });
  it("renders a custom Icon", () => {
    const aErrorCard = shallow(<ErrorCard icon={() => <Bell />} />);
    expect(aErrorCard.find("Bell")).toHaveLength(1);
  });
});
