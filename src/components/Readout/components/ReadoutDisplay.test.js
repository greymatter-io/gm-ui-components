import React from "react";
import { shallow } from "enzyme";
import ReadoutDisplay from "./ReadoutDisplay";

describe("ReadoutDisplay", () => {
  it("matches snapshot when primary is true", () => {
    const aReadoutDisplay = shallow(
      <ReadoutDisplay primary={true} color={"#000"} />
    );
    expect(aReadoutDisplay).toMatchSnapshot();
  });
  it("matches snapshot when primary is false", () => {
    const aReadoutDisplay = shallow(
      <ReadoutDisplay primary={false} color={"#000"} />
    );
    expect(aReadoutDisplay).toMatchSnapshot();
  });
});
