import React from "react";
import { shallow } from "enzyme";
import GRPC from "./GRPC";

describe("GRPC", () => {
  it("matches snapshot", () => {
    const aGRPC = shallow(<GRPC />);
    expect(aGRPC).toMatchSnapshot();
  });
});
