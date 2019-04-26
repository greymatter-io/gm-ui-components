import React from "react";
import { shallow } from "enzyme";

import { ErrorCard } from "../";

describe("ErrorCard", () => {
  it("matches snapshot", () => {
    const anErrorCard = shallow(<ErrorCard />).dive();
    expect(anErrorCard).toMatchSnapshot();
  });
  it("renders an error message", () => {
    const aErrorCard = shallow(<ErrorCard message="Woopsie" />).dive();
    expect(
      aErrorCard
        .find("ErrorMessage")
        .dive()
        .text()
    ).toContain("Woopsie");
  });
  it("renders an error detail message", () => {
    const aErrorCard = shallow(
      <ErrorCard detail="Something went wrong!" />
    ).dive();
    expect(
      aErrorCard
        .find("ErrorDetail")
        .dive()
        .text()
    ).toContain("Something went wrong!");
  });
});
