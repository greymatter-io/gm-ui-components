import React from "react";
import renderer from "react-test-renderer";
import AppFooter from "./AppFooter";
import { LongLogo, Social } from "./AppFooter";
import "jest-styled-components";

let AppFooterTree, Logo, SocialIcon;

beforeAll(() => {
  AppFooterTree = renderer.create(<AppFooter />).toJSON();
  Logo = renderer.create(<LongLogo />).toJSON();
  SocialIcon = renderer.create(<Social />).toJSON();
});

describe("<AppFooter> Snapshot", () => {
  test("renders correctly", () => {
    expect(AppFooterTree).toMatchSnapshot();
  });
});

const hover = { modifier: ":hover" };

describe("<AppFooter> elements", () => {
  test("<Logo> has rule to transition to color on hover", () => {
    expect(Logo).toHaveStyleRule("opacity", "1", hover);
    expect(Logo).toHaveStyleRule("transition", "all 0.2s ease", hover);
    expect(Logo).toHaveStyleRule("filter", "grayscale(0%)", hover);
  });

  test("<Social> imgs have rule to transition opacity on hover", () => {
    expect(SocialIcon).toHaveStyleRule("opacity", "1", hover);
  });
});
