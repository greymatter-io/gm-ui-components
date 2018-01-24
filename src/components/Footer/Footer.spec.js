import React from "react";
import renderer from "react-test-renderer";
import Footer from "./Footer";
import { LongLogo, Social } from "./Footer";
import "jest-styled-components";

let FooterTree, Logo, SocialIcon;

beforeAll(() => {
  FooterTree = renderer.create(<Footer />).toJSON();
  Logo = renderer.create(<LongLogo />).toJSON();
  SocialIcon = renderer.create(<Social />).toJSON();
});

describe("<Footer> Snapshot", () => {
  test("renders correctly", () => {
    expect(FooterTree).toMatchSnapshot();
  });
});

const hover = { modifier: ":hover" };

describe("<Footer> elements", () => {
  test("<Logo> has rule to transition to color on hover", () => {
    expect(Logo).toHaveStyleRule("opacity", "1", hover);
    expect(Logo).toHaveStyleRule("transition", "all 0.2s ease", hover);
    expect(Logo).toHaveStyleRule("filter", "grayscale(0%)", hover);
  });

  test("<Social> imgs have rule to transition opacity on hover", () => {
    expect(SocialIcon).toHaveStyleRule("opacity", "1", hover);
  });
});
