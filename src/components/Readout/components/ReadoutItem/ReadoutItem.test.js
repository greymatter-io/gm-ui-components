import React from "react";
import { shallow } from "enzyme";

import ReadoutItem from "./ReadoutItem";
import { IconSummary } from "../../../";

describe("ReadoutItem", () => {
  it("matches snapshot", () => {
    let aReadoutItem = shallow(
      <ReadoutItem title={"Readout"} value="100" detail="Readout Detail" />
    );
    expect(aReadoutItem).toMatchSnapshot();
  });
  it("renders an icon if provided", () => {
    let aReadoutItem = shallow(
      <ReadoutItem
        title={"Readout"}
        value="100"
        detail="Readout Detail"
        icon={() => <IconSummary size={"24px"} />}
      />
    );
    expect(aReadoutItem.find(IconSummary)).toHaveLength(1);
    aReadoutItem = shallow(<ReadoutItem />);
    expect(aReadoutItem.find(IconSummary)).toHaveLength(0);
    expect(aReadoutItem.html().includes("-")).toBe(true);
  });
  it("renders a title if provided, and a - if not", () => {
    let aReadoutItem = shallow(<ReadoutItem title="A Super Cool Readout" />);
    expect(
      aReadoutItem
        .find("ReadoutItemTitle")
        .html()
        .includes("A Super Cool Readout")
    ).toBe(true);
    aReadoutItem = shallow(<ReadoutItem />);
    expect(
      aReadoutItem
        .find("ReadoutItemTitle")
        .html()
        .includes("A Super Cool Readout")
    ).toBe(false);
  });
  it("renders a value if provided, and a - if not", () => {
    let aReadoutItem = shallow(<ReadoutItem value="100" />);
    expect(
      aReadoutItem
        .find("ReadoutItemValue")
        .html()
        .includes("100")
    ).toBe(true);
    aReadoutItem = shallow(<ReadoutItem />);
    expect(
      aReadoutItem
        .find("ReadoutItemValue")
        .html()
        .includes("100")
    ).toBe(false);
  });
  it("renders a detail if provided, and nothing if not", () => {
    let aReadoutItem = shallow(
      <ReadoutItem detail="Is Justin Ely a better developer than Sean McBride?" />
    );
    expect(
      aReadoutItem
        .find("ReadoutItemDetail")
        .html()
        .includes("Justin Ely")
    ).toBe(true);
    aReadoutItem = shallow(<ReadoutItem />);
    expect(aReadoutItem.find("ReadoutItemDetail")).toHaveLength(0);
  });
});
