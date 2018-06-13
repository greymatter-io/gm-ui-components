import React from "react";
import { shallow } from "enzyme";
import { LayoutSection, Bell, Readout, ReadoutGroup } from "../";

const LayoutSectionWithReadouts = (
  stretchContent = false,
  stretchSection = false
) => {
  return (
    <LayoutSection
      title={"Test Layout"}
      icon={() => <Bell size={"24px"} />}
      stretchContent={stretchContent}
      stretchSection={stretchSection}
    >
      <ReadoutGroup>
        <Readout
          readoutItems={[
            {
              title: "Uptime",
              value: "1000ms"
            }
          ]}
        />
        <Readout
          primary
          readoutItems={[
            {
              title: "Error Rate",
              value: "0.000%",
              icon: () => <Bell size={"24px"} />
            }
          ]}
        />
        <Readout
          readoutItems={[
            {
              title: "Host CPU Cores",
              value: "0"
            }
          ]}
        />
      </ReadoutGroup>
    </LayoutSection>
  );
};

describe("LayoutSection", () => {
  let tree;
  beforeEach(() => {
    tree = shallow(LayoutSectionWithReadouts());
  });
  test("matches snapshot", () => {
    expect(tree).toMatchSnapshot();
  });
  test("renders children", () => {
    expect(tree.find(ReadoutGroup)).toHaveLength(1);
  });
  test("renders an Icon", () => {
    expect(tree.find(Bell)).toHaveLength(1);
  });
  test("renders a Title", () => {
    expect(
      tree
        .find("SectionTitle")
        .children()
        .text()
    ).toBe("Test Layout");
  });
  test("sets flex-grow when stretchSection is true", () => {
    tree = shallow(LayoutSectionWithReadouts(true, true));
    expect(tree.find("LayoutSectionWrap")).toHaveStyleRule("flex", "1 0 auto");
  });
  test("sets align-items when stretchContent is true", () => {
    tree = shallow(LayoutSectionWithReadouts(true, true));
    expect(tree.find("SectionContent")).toHaveStyleRule(
      "align-items",
      "stretch"
    );
  });
});
