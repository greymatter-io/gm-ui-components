import React from "react";
import { shallow } from "enzyme";

import Readout from "./Readout";
import { Summary } from "../";

const readoutItems = [
  {
    title: "Error Rate",
    value: "0.000%",
    icon: () => <Summary size={"24px"} />
  },
  {
    title: "CPU",
    value: "0.000%"
  }
];

describe("Readout", () => {
  it("matches snapshot when primary is true or false", () => {
    let aReadoutWithPrimaryTrue = shallow(<Readout primary={true} />);
    expect(aReadoutWithPrimaryTrue).toMatchSnapshot();
    let aReadoutWithPrimaryFalse = shallow(<Readout primary={false} />);
    expect(aReadoutWithPrimaryFalse).toMatchSnapshot();
  });
  it("matches snapshot when taking a color prop", () => {
    let aReadoutWithColor = shallow(<Readout color={"#0a2"} />);
    expect(aReadoutWithColor).toMatchSnapshot();
  });
  it("matches snapshot when rendering readoutItems", () => {
    let aReadoutWithItems = shallow(
      <Readout color={"#0a2"} readoutItems={readoutItems} />
    );
    expect(aReadoutWithItems).toMatchSnapshot();
  });
  it("renders the correct number of readoutItems", () => {
    let aReadoutWithItems = shallow(
      <Readout color={"#0a2"} readoutItems={readoutItems} />
    );
    expect(aReadoutWithItems.find("ReadoutItem")).toHaveLength(2);
  });
});
